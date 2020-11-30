import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Skill } from './skill.model';

@Injectable({
  providedIn: 'root',
})
export class SkillService {
  constructor(private client: HttpClient) {}

  getSkills() {
    return this.client.get<Skill[]>('/assets/skills.json');
  }
}
