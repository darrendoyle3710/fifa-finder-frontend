import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';
import { PostData } from 'src/app/models/post-data';

@Component({
  selector: 'app-post-display',
  templateUrl: './post-display.component.html',
  styleUrls: ['./post-display.component.css']
})
export class PostDisplayComponent implements OnInit {

  constructor(private service: SharedService) { }

  PostList: any = [];
  PostListUnfiltered: any = [];

  TypeFilter: string = "";
  PlatformFilter: string = "";
  PositionFilter: string = "";

  ModalTitle: string;
  ShowPostOperations: boolean = false;
  post: any;

  postTypes: string[] = PostData.postTypes;
  platforms: string[] = PostData.platforms;
  positions: string[] = PostData.positions;
  playerRatings: string[] = PostData.playerRatings;

  ngOnInit(): void {
    this.refreshPostList();
  }

  refreshPostList() {
    this.service.getPostList().subscribe(data => {
      this.PostList = data;
      this.PostListUnfiltered = data;
      console.log(this.PostList);
    });
  }

  addClick() {
    this.post = {
      ID: 0,
      Type: "",
      Platform: "",
      Position: "",
      PlayerRating: "",
      Description: "",
      UserID: 0
    }
    this.ModalTitle = "Add Post";
    this.ShowPostOperations = true;
  }
  closeClick() {
    this.ShowPostOperations = false;
    this.refreshPostList();
  }

  editPostClick(item) {
    this.post = item;
    this.post
    this.ModalTitle = "Edit Post";
    this.ShowPostOperations = true;
  }

  deletePostClick(item) {
    if (confirm('Are you sure you want to delete this post? This action is irreversible.')) {
      console.log(item.ID);
      this.service.deletePost(item.ID).subscribe(data => {
        alert(data.toString());
        this.refreshPostList();
      })
    }
  }

  FilterPosts() {
    var TypeFilter = this.TypeFilter;
    var PlatformFilter = this.PlatformFilter;
    var PositionFilter = this.PositionFilter;

    console.log("testy");
    this.PostList = this.PostListUnfiltered.filter(function (el) {
      return el.Type.toLowerCase().includes(
        TypeFilter.trim().toLowerCase()
      ) &&
        el.Platform.toLowerCase().includes(
          PlatformFilter.trim().toLowerCase()
        ) &&
        el.Position.toLowerCase().includes(
          PositionFilter.trim().toLowerCase()
        )
    });
  }

}
