import { Component } from "@angular/core";

@Component({
    selector: 'data-binding',
    templateUrl: './dataBinding.component.html'
})

export class DataBindingComponent {
    username = 'Test username';

    onClearUsername() {
        this.username = '';
    }
}