import { Injectable } from "@angular/core";
import { HttpInterceptor } from "@angular/common/http";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  intercept(
    req: import("@angular/common/http").HttpRequest<any>,
    next: import("@angular/common/http").HttpHandler
  ): import("rxjs").Observable<import("@angular/common/http").HttpEvent<any>> {
    if (req.url.includes("https://discord.com", 0)) {
      const idtoken = localStorage.getItem("accessToken");

      if (idtoken) {
        const cloned = req.clone({
          headers: req.headers.set("Authorization", "Bearer " + idtoken),
        });
        return next.handle(cloned);
      }
    } else return next.handle(req);
  }
}