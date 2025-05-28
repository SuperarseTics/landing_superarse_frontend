import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { EditorModule } from 'primeng/editor';
import { InputTextModule } from 'primeng/inputtext';
@Component({
  selector: 'app-articles-editor',
  standalone: true,
  imports: [CommonModule,EditorModule,FormsModule,ReactiveFormsModule,InputTextModule,ButtonModule,RouterModule,DropdownModule],
  templateUrl: './articles-editor.component.html',
  styleUrl: './articles-editor.component.scss'
})
export class ArticlesEditorComponent implements OnInit {
  public bgImage:string = '';
  public text:any;
  public hslideImages:Array<{
    url:string,
    label:string,
  }> = [
    {
    url: 'https://cdn.pixabay.com/photo/2021/04/27/04/19/girl-6210483_1280.jpg',
    label: 'Woman Student',
  },
  {
    url: 'https://cdn.pixabay.com/photo/2015/07/17/22/43/student-849821_1280.jpg',
    label: 'Student 2',
  },
  {
    url: 'https://images.pexels.com/photos/1438072/pexels-photo-1438072.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    label : 'Image 3'
  }
]
;
  formGroup: FormGroup | undefined;

    ngOnInit() {
        this.formGroup = new FormGroup({
            text: new FormControl()
        });
    }
}
