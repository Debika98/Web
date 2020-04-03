import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BlogComponent } from './blog/blog.component';
import { ArticleComponent } from './article/article.component';


import { IntroComponent } from './intro/intro.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContentComponent } from './content/content.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { ClientsComponent } from './clients/clients.component';
import { PricingTablesComponent } from './pricing-tables/pricing-tables.component';

import { HeaderComponent } from './header/header.component';


const routes: Routes = [
  {path: '', redirectTo: '/Home', pathMatch: 'full'},
  {path: 'Home', component: HeaderComponent },
  {path: 'About', component: IntroComponent },
  {path: 'Gallery', component: GalleryComponent },
  {path: 'Services', component: ContentComponent },
  {path: 'Testimonials', component: TestimonialsComponent },
  {path: 'Clients', component: ClientsComponent },
  {path: 'Pricing', component: PricingTablesComponent },
  {path: 'Blog', component: BlogComponent },
  {path: 'Article/:id', component: ArticleComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
