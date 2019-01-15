import { Component, Input, Output, EventEmitter, OnChanges } from '@angular/core';

@Component({
  selector: 'app-likes',
  templateUrl: './likes.component.html',
  styleUrls: ['./likes.component.scss']
})
export class LikesComponent implements OnChanges {
  @Input() likes = 0;
  @Input() dislikes = 0;
  @Output() likeClicked = new EventEmitter();
  @Output() dislikeClicked = new EventEmitter();

  likeRatio = 50;

  constructor() { }

  ngOnChanges(): void {
    if (this.likes === 0 && this.dislikes === 0) {
      this.likeRatio = 50;
    } else if (this.dislikes === 0) {
      this.likeRatio = 100;
    } else {
      this.likeRatio = this.likes / (this.likes + this.dislikes) * 100;
    }
  }

  onLikeClick(): void {
    this.likeClicked.emit();
    console.log('Like clicked');
  }

  onDislikeClick(): void {
    this.dislikeClicked.emit();
    console.log('Dislike clicked');
  }
}
