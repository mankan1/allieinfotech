import {Component, OnInit}  from '@angular/core';
import { Router }           from '@angular/router-deprecated';

@Component({
    selector: 'my-contact',
    templateUrl: 'html/contact.component.html',
    styleUrls: ['css/contact.component.css', 
    'css/app.component.css']
})
export class ContactComponent implements OnInit { 
    title = 'Amazing Products';
    description = 'Androd & IOS apps';
    content = 'Allie Info Tech products speak for themselves. We have published IOS games with our sister company www.onetaxicabs.com - Three Letter Words, a immersive word game to help improve your vocabulary in a fun way. New Word Search - a word search game in a grid of letters with great animations to help encourage players to make progress. Other games include Word Match Puzzle, Match Lines, Make Matching Lines and Jigsaw Puzzle Picture. To learn more about our apps please visit - https://itunes.apple.com/us/developer/manoj-kandlikar/id870007081. For enquiries email at info@allieinfotech.com, manoj@allieinfotech.com(President), katy.clemens@allieinfotech.com';

    constructor(private router: Router) { }

    ngOnInit() {
    }
}
