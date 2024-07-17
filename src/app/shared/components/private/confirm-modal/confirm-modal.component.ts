import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-confirm-modal',
  templateUrl: './confirm-modal.component.html',
  styleUrls: ['./confirm-modal.component.scss']
})
export class ConfirmModalComponent {


  @Input() title: string = '';
  @Input() message: string = '';
  

  constructor(
    public activeModal: NgbActiveModal
  ) { }

  ngOnInit(): void {
  }

  submit(){
    this.activeModal.close('confirm');
  }


}
