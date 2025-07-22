import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-confirm-delete-modal',
  templateUrl: './confirm-delete-modal.component.html',
  styleUrls: ['./confirm-delete-modal.component.scss']
})
export class ConfirmDeleteModalComponent {
  @Input() itemName: string = '';
  @Input() itemType: string = '';

  constructor(public activeModal: NgbActiveModal) {}

  confirmar(): void {
    this.activeModal.close('confirm');
  }

  cancelar(): void {
    this.activeModal.dismiss('cancel');
  }
}
