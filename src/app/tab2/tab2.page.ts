import { Component } from "@angular/core";
import { EpisodesService } from "../services/episodes.service";

@Component({
  selector: "app-tab2",
  templateUrl: "tab2.page.html",
  styleUrls: ["tab2.page.scss"],
})
export class Tab2Page {
  Episodes: any = [];

  constructor(private epiService: EpisodesService) {}

  ngOnInit(): void {
    this.getEpisodes();
  }

  getEpisodes() {
    this.epiService.getEpisodes().subscribe((episodes) => {
      this.Episodes = episodes;
    });
  }
}
