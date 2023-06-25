import { of } from "rxjs";
import { ajax } from "rxjs/ajax";
import { map, catchError } from "rxjs/operators";

class MediaService {
  baseUrl: string = "http://localhost:3001";

  getAllMediaStream() {
    return ajax.getJSON(`${this.baseUrl}/media/all`).pipe(
      map((response: any) => response),
      catchError((error) => of(error))
    );
  }
}

export { MediaService };
