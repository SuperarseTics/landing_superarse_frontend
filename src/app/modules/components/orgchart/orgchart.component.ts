import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TreeNode } from 'primeng/api';
import { OrganizationChartModule } from 'primeng/organizationchart';
@Component({
  selector: 'app-orgchart',
  standalone: true,
  imports: [CommonModule, OrganizationChartModule],
  templateUrl: './orgchart.component.html',
  styleUrl: './orgchart.component.scss'
})
export class OrgchartComponent {
  selectedNodes!: TreeNode[];
  selectedNodes2!: TreeNode[];
  data: TreeNode[] = [
    {
      expanded: true,
      type: 'person',
      data: {
        image: '',
        name: 'Consejo de Regentes',
        title: ''
      },
      children: [
        {
          expanded: true,
          type: 'person',
          data: {
            image: '',
            name: 'Órgano Colegiado Superior',
            title: ''
          },
          children: [
            {
              expanded: true,
              type: 'person',
              data: {
                image: '../../../../assets/modules/autoridades/TAMAYO VERONICA.jpg',
                name: 'MSc. Verónica Tamayo',
                title: 'Rectora'
              },
              children: [
                {
                  expanded: true,
                  type: 'person',
                  data: {
                    image: '',
                    name: 'Secretaría General',
                    title: ''
                  }
                },
                {
                  expanded: true,
                  type: 'person',
                  data: {
                    image: '',
                    name: 'Comité De Ética',
                    title: ''
                  }
                },
                {
                  expanded: true,
                  type: 'person',
                  data: {
                    image: '',
                    name: 'Comité Académico Educativo',
                    title: ''
                  }
                },
                {
                  expanded: true,
                  type: 'person',
                  data: {
                    image: '',
                    name: 'Comité De Bioética',
                    title: ''
                  }
                }
              ]
            }
          ]
        }
      ]
    }
  ];

  secondLevel1: TreeNode[] = [
    {
      expanded: true,
      type: 'person',
      data: {
        image: '../../../../assets/modules/autoridades/TATIANA QUISHPE.JPG',
        name: 'MSc. Tatiana Quishpe',
        title: 'Vicerrectora Acadmémica'
      },
      children: [
        {
          expanded: true,
          type: 'person',
          data: {
            image: '',
            name: 'Dirección de Docencia',
            title: ''
          },
          children: [
            {
              expanded: true,
              label: "Coordinación Escuela de Administración e Industria",
              children: [
                {
                  expanded: true,
                  label: "Coordinación Escuela de Veterinaria",
                  children: [
                    {
                      expanded: true,
                      label: "Coordinación Escuela de Construcción y Extracción Sostenible",
                      children: [
                        {
                          expanded: true,
                          label: "Coordinación Escuela de Salud",
                          children: [
                            {
                              expanded: true,
                              label: "Coordinación Escuela de Educación y Humanidades",
                              children: [
                                {
                                  expanded: true,
                                  label: "Coordinación Diseño y Ajuste Curricular"
                                }
                              ]
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ],
        },
        {
          expanded: true,
          type: 'person',
          data: {
            image: '',
            name: "Dirección de Investigación, Desarrollo e Innovación",
            title: ''
          },
        },
        {
          expanded: true,
          type: 'person',
          data: {
            image: '',
            name: 'Dirección de Vinculación con la Sociedad',
            title: ''
          },
          children: [
            {
              expanded: true,
              label: "Coordinación de Prácticar PreProfesionales",
              children: [
                {
                  expanded: true,
                  label: "Coordinación de Programas y Proyectos de Vinculación",
                  children: [
                    {
                      expanded: true,
                      label: "Coordinación de Relaciones Interinstitucionales"
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  ];

  secondLevel2: TreeNode[] = [
    {
      expanded: true,
      type: 'person',
      data: {
        image: '../../../../assets/modules/autoridades/RAMIRO OBANDO.jpg',
        name: 'MSc. Ramiro Obando',
        title: 'Director Administrativo - Financiero'
      },
      children: [
        {
          expanded: true,
          label: "Coordinación de Aseguramiento de la Calidad y Planificación",
          children: [
            {
              expanded: true,
              label: "Coordinación de Talento Humano",
              children: [
                {
                  expanded: true,
                  label: "Coordinación de Bienestar",
                  children: [
                    {
                      expanded: true,
                      label: "Coordinación de Biblioteca",
                      children: [
                        {
                          expanded: true,
                          label: "Coordinación de Tecnología de Información y Comunicación",
                          children: [
                            {
                              expanded: true,
                              label: "Coordinación de Comunicación Estratégica",
                              children: [
                                {
                                  expanded: true,
                                  label: "Coordinación ¨de Finanzas y Contabiidad",
                                  children: [
                                    {
                                      label: "Coordinación Escuela de Educación Continua"
                                    }
                                  ]
                                }
                              ]
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  ];

    secondLevel3: TreeNode[] = [
      {
        expanded: true,
        type: 'person',
        data: {
          image: '../../../../assets/modules/autoridades/TAMAYO IVAN.jpg',
          name: 'Lcdo. Iván Tamayo',
          title: 'Dirección de Infraestructura'
        },
        children: [
          {
            label: "Coordinación de Seguridad y Salud Ocupacional",
            children: [
              {
                expanded: true,
                label: "Coordinación de Construcción y Mantenimiento"
              }
            ]
          }
        ]
      }
    ];

  secondLevel4: TreeNode[] = [
    {
      // label: "Dirección Comercial"
      expanded: true,
      type: 'person',
      data: {
        image: '',
        name: 'Dirección Comercial',
        title: ''
      },
    }
  ];
}
