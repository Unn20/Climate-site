import {Component, OnInit} from '@angular/core';


@Component({
    selector: 'app-news-scroll',
    templateUrl: './news-scroll.component.html',
    styleUrls: ['./news-scroll.component.scss']
})
export class NewsScrollComponent implements OnInit {
    constructor() {
    }

    public items: any[] = [
        {
            title: 'Lasy płoną',
            path: '../../assets/img/photos/forestFire.jpg',
            url: 'https://www.worldwildlife.org/stories/forest-fires-the-good-and-the-bad'
        },
        {
            title: 'Ziema panie i to z kosmosu',
            path: '../../assets/img/photos/earthFromSpace1.jpg',
            url: 'https://www.nationalgeographic.com/environment/2019/04/science-study-outlines-30-percent-conservation-2030/'
        },
        {
            title: 'A się kręcą!',
            path: '../../assets/img/photos/windTurbines1.jpg',
            url: 'https://www.nationalgeographic.org/encyclopedia/wind-energy/'
        },
        {title: 'przklad ze pobierze zdjecie z neta', path: 'https://bit.ly/2EcKcnD', url: ''},
    ];
    public width = '100%';
    public height = '600px';
    public showText = true;
    public onArticle = false;


    ngOnInit(): void {
    }


}
