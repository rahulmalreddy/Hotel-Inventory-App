import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'hinv-rooms-booking',
  templateUrl: './rooms-booking.component.html',
  styleUrls: ['./rooms-booking.component.css'],
})
export class RoomsBookingComponent implements OnInit {
  id: number = 0;
  id$!: Observable<Number>;
  constructor(private router: ActivatedRoute) {}
  ngOnInit(): void {
    this.router.params.subscribe((params) => {
      this.id = params['roomid'];
    });
    this.id$ = this.router.params.pipe(map((param) => param['roomid']));
  }
}
