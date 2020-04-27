import { Injectable, Inject } from "@angular/core";
import { HttpErrorResponse} from "@angular/common/http";
import { Observable } from "rxjs";
import { NotifierService } from "angular-notifier";


@Injectable({
    providedIn: 'root',
  })
export class NotificationService {

    constructor(private notifierService: NotifierService) { }

    showNotification(message: string){
        this.notifierService.notify("success", message);
    }
    showNotificationError(error: HttpErrorResponse) {
        if (error.error instanceof ErrorEvent) {
            this.notifierService.notify("error", 'An error occurred:'+error.error.message);
        } 
        else {
            this.notifierService.notify("error",`Backend returned code ${error.status}, ` + `body was: ${error.error}`);
        }

      };

 }
