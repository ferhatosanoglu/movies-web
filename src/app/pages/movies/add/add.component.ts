import { Component, Inject, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { AlertifyService } from "src/app/utils/services/alertify.service";
import { MoviesService } from 'src/app/utils/services/movies.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  constructor(
    private alertify: AlertifyService,
    private formBuilder: FormBuilder,
    private moviesService: MoviesService,
    private modalService: NgbActiveModal
  ) {
    this.createForm();
  }
  data: any
  isSubmit: boolean = false;
  movieForm!: FormGroup;

  ngOnInit(): void {
  }

  get f() {
    return this.movieForm.controls;
  }

  async createForm() {
    await this.data
    this.movieForm = this.formBuilder.group({
      name: new FormControl(await this.data?.name, [Validators.required]),
      director: new FormControl(await this.data?.director),
      imageUrl: new FormControl(await this.data?.imageUrl),
      year: new FormControl(await this.data?.year),
    });
  }

  save() {
    this.isSubmit = true;
    if (this.movieForm.invalid) {
      this.alertify.error(
        "Hata",
        "Please fill in the required fields."
      );
    }
    if (this.movieForm.valid) {
      if (!this.data)
        this.moviesService.movieCreate(this.movieForm.value)
      else
        this.moviesService.movieUpdate(this.data._id, this.movieForm.value)
      this.movieForm.reset()
      this.isSubmit = false;
      this.modalService.close()
      this.alertify.success(
        "Success",
        "Movie added successfully."
      );
    }
  }

  delete() {
    this.moviesService.movieDelete(this.data._id)
    this.modalService.close()
    this.alertify.success(
      "Success",
      "Movie deleted successfully."
    );

  }
}
