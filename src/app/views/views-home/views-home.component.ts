/** @format */

import { Component, OnInit } from "@angular/core";

@Component({
    selector: "app-views-home",
    templateUrl: "./views-home.component.html",
    styleUrls: ["./views-home.component.css"],
})
export class ViewsHomeComponent implements OnInit {
    stats = [
        { value: 22, label: "# Number of users" },
        { value: 900, label: "# Revenue" },
        { value: 22, label: "# Reviews" },
    ];

    constructor() {}

    ngOnInit() {}
}
