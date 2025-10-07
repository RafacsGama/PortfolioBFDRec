import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.scss'
})
export class About {
  bio = signal("Desenvolvedor FullStack apaixonado por tecnologia e inovação. Com experiência em diversas linguagens de programação e frameworks, busco constantemente aprimorar minhas habilidades e contribuir para projetos desafiadores. Gosto de trabalhar em equipe e acredito que a colaboração é essencial para o sucesso de qualquer empreendimento. Além do desenvolvimento, tenho interesse em design e usabilidade, sempre buscando criar soluções que sejam não apenas funcionais, mas também agradáveis para os usuários.");
  skills = signal(["Java", " JavaScript", " TypeScript", " Angular", " React", " Node.js", " Python", " SQL", " NoSQL", " Git", " Docker."]);
  values = signal(["Inovação", " Colaboração", " Excelência", " Aprendizado Contínuo", " Empatia"]);
}
