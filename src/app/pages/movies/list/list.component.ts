import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/utils/services/movies.service';
import { AddComponent } from '../add/add.component';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  constructor(
    private movieService: MoviesService,
    private modalService: NgbModal
  ) { }
  movies: any
  loading = false
  filter = {
    search: '',
    size: 12,
    totalPage: 0,
    total: 0,
    page: 0
  }

  ngOnInit() {
    this.getMovies()
  }

  async getMovies() {
    this.loading = true
    await this.movieService.moviesList(this.filter).then((res: any) => {
      this.movies = res.data
      this.filter.totalPage = res.pageOptions.totalPage
      this.filter.page = res.pageOptions.page
      this.filter.total = res.pageOptions.total
      this.loading = false

    }
    )
  }


  addMovie(data: any = null) {
    const modalRef = this.modalService.open(AddComponent)
    modalRef.componentInstance.data = data;
    modalRef.result.then((result) => {
      this.getMovies()
    }, (reason) => {
    });
  }


}
