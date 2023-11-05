let form = document.querySelector<HTMLFormElement>('form'),
date_the_birth:NodeListOf<HTMLInputElement> = document.querySelectorAll<HTMLInputElement>('input')
let day_now: number = new Date().getDay(),
month_now: number = new Date().getMonth() + 1,
year_now: number  = new Date().getFullYear();
//Stack the time
let stack_year: number | undefined,
stack_day: number | undefined,
stack_month: number | undefined;

let arrow_down = document.querySelector<HTMLElement>('.arrow_down')
let years_display = document.querySelector<HTMLElement>('#years_display'),
months_display = document.querySelector<HTMLElement>('#months_display'),
days_display = document.querySelector<HTMLElement>('#days_display');


const year = document.querySelector<HTMLInputElement>('#year'),
month = document.querySelector<HTMLInputElement>('#month'),
day = document.querySelector<HTMLInputElement>('#day');




const year_label = document.querySelector<HTMLElement>('#year_label'),
day_label = document.querySelector<HTMLElement>('#day_label'),
month_label = document.querySelector<HTMLElement>('#month_label');

let regex_year:RegExp = /^\{4}$/
let borderInput = document.querySelector('.borderInput') as HTMLInputElement

/**
 * Create function error 
 * @param colorBorder 
 * @param colorText 
 */
const take_error = (time_label:any,time:any,colorBorder:string, colorText: string ):void =>{
time?.classList.add(colorBorder)
time_label?.classList.add(colorText)

} 

month?.addEventListener('input', (e: Event) => {
  const inputElement = e.currentTarget as HTMLInputElement;
  const inputValue = inputElement.value;


  if (inputValue.length > 2) {
    inputElement.value = inputValue.slice(0, 2);
  }})

day?.addEventListener('input', (e: Event) => {
  const inputElement = e.currentTarget as HTMLInputElement;
  const inputValue = inputElement.value;


  if (inputValue.length > 2) {
    inputElement.value = inputValue.slice(0, 2);
  }})

year?.addEventListener('input', (e: Event) => {
  const inputElement = e.currentTarget as HTMLInputElement;
  const inputValue = inputElement.value;


  if (inputValue.length >= 4) {
    inputElement.value = inputValue.slice(0, 4);
  }})




/**
 * Full the data of date of birth
 */
date_the_birth.forEach(input=> {
input?.addEventListener('input', (e:any)=>{
if(input.value.length === 0 ){

}
   
let select_value =((e.currentTarget as HTMLInputElement).value)

switch(e.currentTarget.id){
    case 'year':
        input?.setAttribute('max',`${year_now - 2}`)
        if(regex_year && input.value.length === 4 && Number(input?.value) <= year_now){
            stack_year = year_now - parseInt(select_value)
            take_error(year, year_label,'border-slate-600','text-slate-600')

            }
        else if( Number(input?.value) > year_now){
        take_error(year, year_label,'border-red-600','text-red-600')
       
            return null
        }
        break;

     case 'day':
        if(  input.value.length <= 2){
            stack_day =  Math.abs(day_now - parseInt(select_value) )
            take_error(day, day_label,'border-slate-600','text-slate-600')
       
             
        }else {
       
            take_error(day, day_label,'border-red-600','text-red-600')
        }
     
            break;
    case 'month':
        stack_month =  Math.abs(month_now - parseInt(select_value)) 
            break;
        }


})
    
})
let display_years;
/**
 * Send form
 */
arrow_down?.addEventListener('click', ()=>{

if (years_display && days_display && months_display ) {

  years_display.innerHTML = stack_year?.toString() + ' ';
  days_display.innerHTML = stack_day?.toString() + ' ';
  months_display.innerHTML = stack_month?.toString() + ' ';

  
  if (arrow_down) {
  const closestCircleArrow = arrow_down.closest('.circle_arrow');
  closestCircleArrow && closestCircleArrow.classList.add('bg-purple-700'); 
}
}

else{
    alert('Veuillez entre les données correctement!!')
}
 years_display?.classList.add('text-purple-700')
 days_display?.classList.add('text-purple-700')

  if (stack_year === undefined || stack_day === undefined || stack_month === undefined) {
    alert('undefined correctly');
    if (years_display && days_display && months_display ) {

  years_display.innerHTML = '--';
  days_display.innerHTML = '--';
  months_display.innerHTML = '--';}
  }

})


