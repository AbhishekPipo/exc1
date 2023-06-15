import { Component } from '@angular/core';
import { FlopService } from '../flop.service';

@Component({
  selector: 'app-exc-putting-basics-togethre',
  templateUrl: './exc-putting-basics-togethre.component.html',
  styleUrls: ['./exc-putting-basics-togethre.component.css']
})
export class ExcPuttingBasicsTogethreComponent {
selectedIndex: number=-1;
voteFor(index: number){
  if(this.isSelected(index)){
    this.selectedIndex=-1;
  }else{
    this.selectedIndex=index;
  }
     this.selectedIndex=index;
}
isSelected(index: number){
  return this.selectedIndex ===index;
}

anySelected(){
 return this.selectedIndex!==-1;
}

getButtonText(index: number){

  if(this.isSelected(index)){
    return "Unvote";
  }else{
    return "Vote"
  }
}


constructor(public flopservise: FlopService){

}

// onClick(){
//   this.flopservice.
// }
rentalFeeCalculator(){
  
}
}
