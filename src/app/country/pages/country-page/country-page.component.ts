import { JsonPipe } from '@angular/common';
import { Component, effect, inject, signal } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/country.interfaces';
import { tick } from '@angular/core/testing';
import { filter, switchMap, tap } from 'rxjs';

@Component({
  selector: 'app-country-page',
  imports: [ReactiveFormsModule, JsonPipe],
  templateUrl: './country-page.component.html',
})
export class CountryPageComponent {
  fb=inject(FormBuilder);
  countryService=inject(CountryService);
  regions=signal(this.countryService.regions);
  borders=signal<Country[]>([]);
  countriesByRegion=signal<Country[]>([])
  myForm=this.fb.group({
    region:['',Validators.required],
    country:['',Validators.required],
    border:['',Validators.required],
  })
  onFormChanged=effect((onCleanup)=>{
    const regionSubscription=this.onRegionChanged();
    const countrySubscription=this.onCountryChanged();
    onCleanup(()=>{
      regionSubscription.unsubscribe();
      countrySubscription.unsubscribe();
    });
  });
  onRegionChanged(){
    return this.myForm.get('region')!.valueChanges
    .pipe(
      tap(()=> this.myForm.get('country')!.setValue('')),
      tap(()=> this.myForm.get('border')!.setValue('')),
      tap(()=> {
        this.borders.set([]);
        this.countriesByRegion.set([]);
      }),
      switchMap(region=> this.countryService.getCountriesByRegion(region ??'')),
    )
    .subscribe((countries)=>{
      this.countriesByRegion.set(countries);
    });
  }
  onCountryChanged(){
    return this.myForm.get('country')!.valueChanges
    .pipe(
      tap(()=> this.myForm.get('border')!.setValue('')),
      filter(value=> value!.length>0),
      switchMap(countryCode=> this.countryService.getCountryByAlphaCode(countryCode ??'')),
      switchMap(country => this.countryService.getCountryNmesByCodesArray(country.borders))
    )
    .subscribe((borders)=>{
      this.borders.set(borders);
      })
  }
  }
