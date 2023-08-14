import { Injectable } from "@angular/core";
import { ToastrService } from "ngx-toastr";

@Injectable({
  providedIn: "root",
})
export class AlertifyService {
  constructor(private toastr: ToastrService) { }

  success(
    title: string = "Success",
    text: string = "Your request has been processed successfully.",
    isConfirm: boolean = false
  ) {
    this.toastr.success(text, title);
  }

  error(
    title: string = "Error",
    text: string = "Error occured while processing your request.",
    options: any = {}
  ) {
    this.toastr.error(text, title, options);
  }

  warning(msg: string) {
    this.toastr.error("Warning", msg);
  }
}