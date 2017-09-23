import { Component } from '@angular/core';
import { PostService } from '../services/post.service';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers: [PostService]
})
export class UserComponent {
  name: string;
  email: string;
  address: Address;
  hobbies: string[];
  showHobbies: boolean;
  posts: Post[];
  constructor(private postService: PostService) {
    this.name = 'john noriega';
    this.email = 'john22@gmail.com';
    this.address = {
      street: '12 Main st',
        city: 'boston',
        state: 'MA'
    };
    this.hobbies = ['Music', 'Movies', 'Sports'];
    this.showHobbies = false;
    this.postService.getPost().subscribe(posts => {
      this.posts = posts;
      console.log(posts);
    });
  }
  toggleHobbies() {
    if (this.showHobbies === true) {
      this.showHobbies = false;
    } else { this.showHobbies = true; }
    console.log('show');

  }
  addHobby(hobby) {
    console.log(hobby);
    this.hobbies.push(hobby);
  }
  deleteHobby(i) {
    this.hobbies.splice(i, 1);
  }
}

interface Address {
  street: string;
  city: string;
  state: string;
}

interface Post {
  id: number;
  title: string;
  body: string;
}
