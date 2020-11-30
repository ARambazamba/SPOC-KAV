import { Component, OnInit } from '@angular/core';
import { SkillService } from '../skill.service';

@Component({
  selector: 'app-skills-list',
  templateUrl: './skills-list.component.html',
  styleUrls: ['./skills-list.component.scss'],
})
export class SkillsListComponent implements OnInit {
  skills = this.service.getSkills();

  constructor(private service: SkillService) {}

  ngOnInit(): void {}
}
