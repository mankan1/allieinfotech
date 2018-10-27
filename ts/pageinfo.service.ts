import { Injectable, EventEmitter }       from '@angular/core';

@Injectable()
export class PageinfoService {
    private title: string = null;
    private description: string = null;

    constructor() {}

    getTitle() {
        return this.title;
    }

    setTitle(title: string) {
        this.title = title;
    }

    getDescription() {
        return this.description;
    }

    setDescription(description: string) {
        this.description = description;
    }
}