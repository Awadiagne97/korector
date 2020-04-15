import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SessionComponent} from './session/session.component';
import {HomeComponent} from './home/home.component';
import {SessionDetailComponent} from './session-detail/session-detail.component';
import {CreateSessionComponent} from './create-session/create-session.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {ProfileComponent} from './profile/profile.component';
import {BoardUserComponent} from './board-user/board-user.component';
import {BoardModeratorComponent} from './board-moderator/board-moderator.component';
import {BoardAdminComponent} from './board-admin/board-admin.component';


import {CriteriaListComponent} from "./criteria-list/criteria-list.component";
import {CreateCriteriaComponent} from "./create-criteria/create-criteria.component";
import {SearchCriteriaComponent} from "./search-criteria/search-criteria.component";

//{ Awa part }
import {StatsComponent} from './stats/stats.component';
import {AddStudentComponent} from './add-student/add-student.component';
import {AddTeacherComponent} from './add-teacher/add-teacher.component';
import {StudentStatsComponent} from './student-stats/student-stats.component';
import {ProfsStatsComponent} from './profs-stats/profs-stats.component';
import {ClassesStatsComponent} from './classes-stats/classes-stats.component';
import {ProjectComponent} from './project/project.component';
import {ProjetDetailComponent} from './projet-details/projet-detail.component';
import {SectionDetailComponent} from './section-details/section-detail.component';
import {CreateProjetComponent} from './createProjet/createProjet.component';
import {CreateSectionComponent} from './createSection/createSection.component';
import {SectionComponent} from './section/section.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'session', component: SessionComponent },
  { path: 'session-detail/:id', component: SessionDetailComponent },
  { path: 'createSession', component: CreateSessionComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'user', component: BoardUserComponent },
  { path: 'mod', component: BoardModeratorComponent },
  { path: 'admin', component: BoardAdminComponent },
  { path: 'projet', component: ProjectComponent },
  { path: 'section', component: SectionComponent },

  { path: 'section-detail/:id', component: SectionDetailComponent },
  { path: 'projet-detail/:id', component: ProjetDetailComponent },
  { path: 'createProjet', component: CreateProjetComponent },
  { path: 'createSection', component: CreateSectionComponent },
  //
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'add', component: StatsComponent },
  { path: 'addStudent', component: AddStudentComponent },
  { path: 'addTeacher', component: AddTeacherComponent },
  { path: 'stats', component: StatsComponent },
  { path: 'studentStats', component: StudentStatsComponent },
  { path: 'profsStats', component: ProfsStatsComponent},
  { path: 'classesStats', component: ClassesStatsComponent },
  {path: 'criteria', component: CriteriaListComponent},
  {path: 'addCriteria', component: CreateCriteriaComponent},
  {path: 'findCriteria', component: SearchCriteriaComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
