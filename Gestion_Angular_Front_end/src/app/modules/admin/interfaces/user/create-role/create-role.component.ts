
import { RoleDto } from './../../../../../classes/role-dto';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { RoleService } from 'src/app/services/role.service';

@Component({
  selector: 'app-create-role',
  templateUrl: './create-role.component.html',
  styleUrls: ['./create-role.component.css']
})
export class CreateRoleComponent implements OnInit {


roleDto: RoleDto = new RoleDto();
    constructor(private roleService:RoleService,
      private router: Router) { }

    ngOnInit(): void {
    }

    saveRole(){
      this.roleService.addRole(this.roleDto).subscribe( data =>{
        console.log(data);
        this.goToroleList();
      },
      error => console.log(error));
    }

    goToroleList(){
      this.router.navigate(['admin/list-role']);
    }

    onSubmit(){
      console.log(this.roleDto);
      this.saveRole();
    }
  }

