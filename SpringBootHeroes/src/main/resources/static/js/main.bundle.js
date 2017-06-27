webpackJsonp([1,5],{

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_heroes_service__ = __webpack_require__(70);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeroeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HeroeComponent = (function () {
    function HeroeComponent(_router, _aRoute, _heroeService) {
        this._router = _router;
        this._aRoute = _aRoute;
        this._heroeService = _heroeService;
        this.heroe = {
            id: "",
            nombre: "",
            poder: "",
            casa: "",
            imagen: ""
        };
        this.abrirAlert = false;
        this.imagenString = "";
        this.heroeForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormGroup */]({
            'id': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormControl */]('', []),
            'nombre': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormControl */]('', [
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].minLength(1)
            ]),
            'poder': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormControl */]('', [
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].minLength(1)
            ]),
            'casa': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required]),
            'imagen': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormControl */]('', []),
        });
    }
    HeroeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._aRoute.params.subscribe(function (params) {
            _this.param = params['id'];
        });
        if (this.param !== 'nuevo') {
            this._heroeService.findHeroe(this.param)
                .subscribe(function (response) {
                _this.heroe = response[0];
            }, (function (error) { return console.log(error); }));
        }
    };
    ;
    HeroeComponent.prototype.guardarHeroe = function () {
        var _this = this;
        if (this.imagenString !== "") {
            this.heroeForm.value.imagen = this.imagenString;
        }
        this._heroeService.addHeroe(this.heroeForm.value)
            .subscribe(function (response) {
            _this.abrirAlert = true;
            _this.resultadoOperacion = response;
            _this._router.navigate(['heroe', 'nuevo']);
            _this.heroeForm.reset({
                "casa": ""
            });
        }, function (error) {
            console.log(error);
            _this.abrirAlert = true;
            _this.resultadoOperacion = false;
        });
    };
    ;
    HeroeComponent.prototype.actualizarHeroe = function () {
        var _this = this;
        if (this.imagenString == "") {
            this.heroeForm.value.imagen = this.heroe.imagen;
        }
        else {
            this.heroeForm.value.imagen = this.imagenString;
        }
        this._heroeService.updateHeroe(this.heroeForm.value)
            .subscribe(function (response) {
            _this.abrirAlert = true;
            _this.resultadoOperacion = response;
        }, function (error) {
            console.log(error);
            _this.abrirAlert = true;
            _this.resultadoOperacion = false;
        });
    };
    ;
    HeroeComponent.prototype.cargarImagen = function (event) {
        var files = event.target.files;
        var file = files[0];
        if (files && file) {
            var reader = new FileReader();
            reader.onload = this.transformImagen.bind(this);
            reader.readAsBinaryString(file);
        }
    };
    ;
    HeroeComponent.prototype.transformImagen = function (readerEvt) {
        var binaryString = readerEvt.target.result;
        this.imagenString = btoa(binaryString);
    };
    ;
    return HeroeComponent;
}());
HeroeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* Component */])({
        selector: 'app-heroe',
        template: __webpack_require__(283)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_heroes_service__["a" /* HeroesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_heroes_service__["a" /* HeroesService */]) === "function" && _c || Object])
], HeroeComponent);

var _a, _b, _c;
//# sourceMappingURL=heroe.component.js.map

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_heroes_service__ = __webpack_require__(70);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeroesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HeroesComponent = (function () {
    function HeroesComponent(_router, _heroesService) {
        this._router = _router;
        this._heroesService = _heroesService;
        this.heroesList = [];
        this.abrirAlert = false;
        this.idHeroe = "";
        this.paramBuscar = "";
    }
    HeroesComponent.prototype.ngOnInit = function () {
        this.getAllHeroes();
    };
    ;
    HeroesComponent.prototype.getAllHeroes = function () {
        var _this = this;
        this._heroesService.findAllHeroes()
            .subscribe(function (response) {
            _this.heroesList = response;
        }, function (error) { console.log(error); });
    };
    ;
    HeroesComponent.prototype.buscarHeroe = function () {
    };
    ;
    HeroesComponent.prototype.agregarHeroe = function () {
        this._router.navigate(['heroe', 'nuevo']);
    };
    ;
    HeroesComponent.prototype.editarHeroe = function (id) {
        this._router.navigate(['heroe', id]);
    };
    ;
    HeroesComponent.prototype.openDeleteModal = function (id) {
        this.idHeroe = id;
        $('#deleteModal').modal();
    };
    ;
    HeroesComponent.prototype.closeDeleteModal = function () {
        $('#deleteModal').modal('hide');
        this.idHeroe = "";
    };
    ;
    HeroesComponent.prototype.eliminarHeroe = function () {
        var _this = this;
        if (this.idHeroe !== "") {
            this._heroesService.deleteHeroe(this.idHeroe)
                .subscribe(function (response) {
                _this.abrirAlert = true;
                _this.resultadoOperacion = response;
                console.log(_this.resultadoOperacion);
                _this.getAllHeroes();
            }, function (error) {
                console.log(error);
                _this.abrirAlert = true;
                _this.resultadoOperacion = false;
                console.log(_this.resultadoOperacion);
                _this.getAllHeroes();
            });
            this.closeDeleteModal();
        }
        else {
            console.error("-- No se obtuvo id del Heroe a eliminar --");
            return;
        }
    };
    ;
    return HeroesComponent;
}());
HeroesComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* Component */])({
        selector: 'app-heroes',
        template: __webpack_require__(284)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_heroes_service__["a" /* HeroesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_heroes_service__["a" /* HeroesService */]) === "function" && _b || Object])
], HeroesComponent);

var _a, _b;
//# sourceMappingURL=heroes.component.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* Component */])({
        selector: 'app-home',
        template: __webpack_require__(285),
        styles: []
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(51);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PerfilComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PerfilComponent = (function () {
    function PerfilComponent(_authService) {
        this._authService = _authService;
    }
    PerfilComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this._authService.userProfile) {
            this.profile = this._authService.userProfile;
        }
        else {
            this._authService.getProfile(function (error, profile) {
                _this.profile = profile;
            });
        }
    };
    return PerfilComponent;
}());
PerfilComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* Component */])({
        selector: 'app-perfil',
        template: __webpack_require__(287),
        styles: []
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object])
], PerfilComponent);

var _a;
//# sourceMappingURL=perfil.component.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_service__ = __webpack_require__(51);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuardService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthGuardService = (function () {
    function AuthGuardService(_authService) {
        this._authService = _authService;
    }
    AuthGuardService.prototype.canActivate = function (next, state) {
        if (this._authService.isAuthenticated()) {
            return true;
        }
        else {
            console.error("-- Usuario Bloqueado, para ver el contenido se requiere autenticación --");
            return false;
        }
    };
    return AuthGuardService;
}());
AuthGuardService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */]) === "function" && _a || Object])
], AuthGuardService);

var _a;
//# sourceMappingURL=auth-guard.service.js.map

/***/ }),

/***/ 166:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 166;


/***/ }),

/***/ 167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(186);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 178:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(281),
        styles: [__webpack_require__(267)]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 179:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_navbar_navbar_component__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_home_home_component__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_heroes_heroes_component__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_footer_footer_component__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_heroes_service__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_auth_service__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_auth_guard_service__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__app_routes__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_heroe_heroe_component__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pipes_sinimagen_pipe__ = __webpack_require__(185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pipes_domseguro_pipe__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pipes_search_pipe__ = __webpack_require__(184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_ngx_pagination__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_perfil_perfil_component__ = __webpack_require__(104);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_5__components_navbar_navbar_component__["a" /* NavbarComponent */],
            __WEBPACK_IMPORTED_MODULE_6__components_home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_7__components_heroes_heroes_component__["a" /* HeroesComponent */],
            __WEBPACK_IMPORTED_MODULE_8__components_footer_footer_component__["a" /* FooterComponent */],
            __WEBPACK_IMPORTED_MODULE_13__components_heroe_heroe_component__["a" /* HeroeComponent */],
            __WEBPACK_IMPORTED_MODULE_14__pipes_sinimagen_pipe__["a" /* SinimagenPipe */],
            __WEBPACK_IMPORTED_MODULE_15__pipes_domseguro_pipe__["a" /* DomseguroPipe */],
            __WEBPACK_IMPORTED_MODULE_16__pipes_search_pipe__["a" /* SearchPipe */],
            __WEBPACK_IMPORTED_MODULE_18__components_perfil_perfil_component__["a" /* PerfilComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_12__app_routes__["a" /* APP_ROUTING */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_17_ngx_pagination__["a" /* NgxPaginationModule */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_9__services_heroes_service__["a" /* HeroesService */],
            __WEBPACK_IMPORTED_MODULE_10__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_11__services_auth_guard_service__["a" /* AuthGuardService */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 180:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_home_home_component__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_heroe_heroe_component__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_heroes_heroes_component__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_perfil_perfil_component__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_auth_guard_service__ = __webpack_require__(105);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return APP_ROUTING; });






var APP_ROUTES = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_1__components_home_home_component__["a" /* HomeComponent */] },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_1__components_home_home_component__["a" /* HomeComponent */] },
    {
        path: 'heroe/:id', component: __WEBPACK_IMPORTED_MODULE_2__components_heroe_heroe_component__["a" /* HeroeComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_5__services_auth_guard_service__["a" /* AuthGuardService */]]
    },
    {
        path: 'heroes', component: __WEBPACK_IMPORTED_MODULE_3__components_heroes_heroes_component__["a" /* HeroesComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_5__services_auth_guard_service__["a" /* AuthGuardService */]]
    },
    {
        path: 'perfil', component: __WEBPACK_IMPORTED_MODULE_4__components_perfil_perfil_component__["a" /* PerfilComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_5__services_auth_guard_service__["a" /* AuthGuardService */]]
    },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];
var APP_ROUTING = __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* RouterModule */].forRoot(APP_ROUTES);
//# sourceMappingURL=app.routes.js.map

/***/ }),

/***/ 181:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    return FooterComponent;
}());
FooterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* Component */])({
        selector: 'app-footer',
        template: __webpack_require__(282)
    }),
    __metadata("design:paramtypes", [])
], FooterComponent);

//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ 182:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(51);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavbarComponent = (function () {
    function NavbarComponent(_authService) {
        this._authService = _authService;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        this._authService.handleAuthentication();
    };
    NavbarComponent.prototype.login = function () {
        this._authService.login();
    };
    NavbarComponent.prototype.logout = function () {
        this._authService.logout();
    };
    return NavbarComponent;
}());
NavbarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* Component */])({
        selector: 'app-navbar',
        template: __webpack_require__(286),
        styles: []
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object])
], NavbarComponent);

var _a;
//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ 183:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(32);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DomseguroPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DomseguroPipe = (function () {
    function DomseguroPipe(_domSanitizer) {
        this._domSanitizer = _domSanitizer;
    }
    DomseguroPipe.prototype.transform = function (value, url) {
        return this._domSanitizer.bypassSecurityTrustResourceUrl(url + value);
    };
    return DomseguroPipe;
}());
DomseguroPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Pipe */])({
        name: 'domseguro'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */]) === "function" && _a || Object])
], DomseguroPipe);

var _a;
//# sourceMappingURL=domseguro.pipe.js.map

/***/ }),

/***/ 184:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SearchPipe = (function () {
    function SearchPipe() {
    }
    SearchPipe.prototype.transform = function (heroes, term) {
        if (term === undefined)
            return heroes;
        //function(item) Funcion que comprueba en cada elemento del array para ver si se cumple la condición
        //también se le conoce como predicado
        return heroes.filter(function (heroe) {
            for (var atributoHeroe in heroe) {
                if (heroe[atributoHeroe] === null) {
                    continue;
                }
                if (heroe[atributoHeroe].toString().toLowerCase().includes(term.toLowerCase())) {
                    return true;
                }
            }
            return false;
        });
    };
    return SearchPipe;
}());
SearchPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Pipe */])({
        name: 'search'
    })
], SearchPipe);

//# sourceMappingURL=search.pipe.js.map

/***/ }),

/***/ 185:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SinimagenPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SinimagenPipe = (function () {
    function SinimagenPipe() {
    }
    SinimagenPipe.prototype.transform = function (value) {
        var noImage = "assets/img/noimage.png";
        var imgEncode = "data:image/jpg;base64,";
        if (!value || value == "") {
            return noImage;
        }
        return imgEncode + value;
    };
    return SinimagenPipe;
}());
SinimagenPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Pipe */])({
        name: 'sinimagen'
    })
], SinimagenPipe);

//# sourceMappingURL=sinimagen.pipe.js.map

/***/ }),

/***/ 186:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 267:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(39)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 281:
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div class=\"container main-container\">\n  <router-outlet></router-outlet>\n</div>\n<app-footer></app-footer>\n"

/***/ }),

/***/ 282:
/***/ (function(module, exports) {

module.exports = "<nav class=\" navbar fixed-bottom bg-inverse bg-faded text-center\">\r\n  <div class=\"container\">\r\n    <p class=\"text-white\">\r\n      &copy; LyHo-Soft\r\n    </p>\r\n  </div>\r\n</nav>\r\n"

/***/ }),

/***/ 283:
/***/ (function(module, exports) {

module.exports = "<div class=\"container animated fadeIn fast\" *ngIf=\"param === 'nuevo'\">\r\n  <h4>Nuevo <small>Héroe</small></h4>\r\n  <hr>\r\n\r\n  <div class=\"container\" *ngIf=\"abrirAlert\">\r\n\r\n    <div *ngIf=\"resultadoOperacion\"\r\n      id=\"successAlert\"\r\n      class=\"alert alert-success\" role=\"alert\" aria-label=\"Close\">\r\n      <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\r\n        <span aria-hidden=\"true\">&times;</span>\r\n      </button>\r\n      <strong>Héroe Guardado!</strong> El Heroe se ha guardado correctamente.\r\n    </div>\r\n\r\n    <div *ngIf=\"resultadoOperacion == false\"\r\n      id=\"errorAlert\"\r\n      class=\"alert alert-danger\" role=\"alert\" aria-label=\"Close\">\r\n      <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\r\n        <span aria-hidden=\"true\">&times;</span>\r\n      </button>\r\n      <strong>Error al Guardar Héroe!</strong> Se presentó un error al guardar el Héroe.\r\n    </div>\r\n\r\n  </div>\r\n\r\n  <form [formGroup]=\"heroeForm\" (ngSubmit)=\"guardarHeroe()\">\r\n\r\n    <div hidden=\"true\"\r\n      class=\"form-group row\">\r\n      <label class=\"col-2 col-form-label\">id</label>\r\n      <div class=\"col-8\">\r\n\r\n        <input [(ngModel)]=\"heroe.id\"\r\n              class=\"form-control\"\r\n              type=\"text\"\r\n              placeholder=\"Id...\"\r\n              formControlName=\"id\">\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"form-group row\" [ngClass]=\"{'has-danger': heroeForm.controls['nombre'].touched && (!heroeForm.controls['nombre'].valid)}\">\r\n      <label class=\"col-2 col-form-label\">Nombre</label>\r\n      <div class=\"col-8\">\r\n\r\n        <input [(ngModel)]=\"heroe.nombre\"\r\n              class=\"form-control\"\r\n              type=\"text\"\r\n              placeholder=\"Nombre...\"\r\n              formControlName=\"nombre\">\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"firm-control-feedback alert alert-danger\" role=\"alert\" *ngIf=\"heroeForm.controls['nombre'].touched && (!heroeForm.controls['nombre'].valid)\">\r\n      El Campo es Requerido\r\n    </div>\r\n\r\n    <div class=\"form-group row\" [ngClass]=\"{'has-danger': heroeForm.controls['poder'].touched && (!heroeForm.controls['poder'].valid)}\">\r\n      <label class=\"col-2 col-form-label\">Poder</label>\r\n      <div class=\"col-8\">\r\n\r\n        <input [(ngModel)]=\"heroe.poder\"\r\n              class=\"form-control\"\r\n              type=\"text\"\r\n              placeholder=\"Poder...\"\r\n              formControlName=\"poder\">\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"firm-control-feedback alert alert-danger\" role=\"alert\" *ngIf=\"heroeForm.controls['poder'].touched && (!heroeForm.controls['poder'].valid)\">\r\n      El Campo es Requerido\r\n    </div>\r\n\r\n    <div class=\"form-group row\" [ngClass]=\"{'has-danger': heroeForm.controls['casa'].touched && (!heroeForm.controls['casa'].valid)}\">\r\n      <select [(ngModel)]=\"heroe.casa\"\r\n          class=\"form-control form-control-sm\"\r\n          formControlName=\"casa\"\r\n          name=\"casa\">\r\n        <option value=\"\">-- Seleccione una Opción --</option>\r\n        <option value=\"MARVEL\">MARVEL</option>\r\n        <option value=\"DC\">DC</option>\r\n      </select>\r\n\r\n    </div>\r\n\r\n    <div class=\"firm-control-feedback alert alert-danger\" role=\"alert\" *ngIf=\"heroeForm.controls['casa'].touched && (!heroeForm.controls['casa'].valid)\">\r\n      El Campo es Requerido\r\n    </div>\r\n\r\n    <div class=\"form-group row\">\r\n      <label class=\"col-2 col-form-label\">Imagen</label>\r\n      <div class=\"col-8\">\r\n        <input\r\n              [(ngModel)]=\"heroe.imagen\"\r\n              class=\"form-control\"\r\n              type=\"file\"\r\n              formControlName=\"imagen\"\r\n              name=imagen\r\n              (change)=\"cargarImagen($event)\">\r\n      </div>\r\n    </div>\r\n    <br>\r\n\r\n    <div class=\"form-group row\">\r\n      <button [disabled] = !heroeForm.valid\r\n        type=\"submit\"\r\n        class=\"btn btn-outline-primary\">Guardar</button>\r\n    </div>\r\n\r\n  </form>\r\n</div>\r\n\r\n\r\n<div class=\"container animated fadeIn fast\" *ngIf=\"param !== 'nuevo'\">\r\n  <h4>Editar <small>Heroe</small></h4>\r\n  <hr>\r\n\r\n  <div class=\"container\" *ngIf=\"abrirAlert\">\r\n\r\n    <div *ngIf=\"resultadoOperacion\"\r\n      id=\"successAlert\"\r\n      class=\"alert alert-success\" role=\"alert\" aria-label=\"Close\">\r\n      <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\r\n        <span aria-hidden=\"true\">&times;</span>\r\n      </button>\r\n      <strong>Héroe Guardado!</strong> El Heroe se ha guardado correctamente.\r\n    </div>\r\n\r\n    <div *ngIf=\"resultadoOperacion == false\"\r\n      id=\"errorAlert\"\r\n      class=\"alert alert-danger\" role=\"alert\" aria-label=\"Close\">\r\n      <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\r\n        <span aria-hidden=\"true\">&times;</span>\r\n      </button>\r\n      <strong>Error al Guardar Héroe!</strong> Se presentó un error al guardar el Héroe.\r\n    </div>\r\n\r\n  </div>\r\n\r\n  <form [formGroup]=\"heroeForm\" (ngSubmit)=\"actualizarHeroe()\">\r\n\r\n    <div hidden=\"true\"\r\n      class=\"form-group row\">\r\n      <label class=\"col-2 col-form-label\">id</label>\r\n      <div class=\"col-8\">\r\n\r\n        <input [(ngModel)]=\"heroe.id\"\r\n              class=\"form-control\"\r\n              type=\"text\"\r\n              placeholder=\"Id...\"\r\n              formControlName=\"id\">\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"form-group row\">\r\n      <label class=\"col-2 col-form-label\">Nombre</label>\r\n      <div class=\"col-8\">\r\n\r\n        <input [(ngModel)]=\"heroe.nombre\"\r\n              class=\"form-control\"\r\n              type=\"text\"\r\n              placeholder=\"Nombre...\"\r\n              formControlName=\"nombre\">\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"form-group row\">\r\n      <label class=\"col-2 col-form-label\">Poder</label>\r\n      <div class=\"col-8\">\r\n\r\n        <input [(ngModel)]=\"heroe.poder\"\r\n              class=\"form-control\"\r\n              type=\"text\"\r\n              placeholder=\"Poder...\"\r\n              formControlName=\"poder\">\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"form-group row\">\r\n      <select [(ngModel)]=\"heroe.casa\"\r\n          class=\"form-control form-control-sm\"\r\n          formControlName=\"casa\"\r\n          name=\"casa\">\r\n        <option value=\"\">-- Seleccione una Opción --</option>\r\n        <option value=\"MARVEL\">MARVEL</option>\r\n        <option value=\"DC\">DC</option>\r\n      </select>\r\n    </div>\r\n\r\n    <div class=\"form-group row\">\r\n      <label class=\"col-2 col-form-label\">Imagen</label>\r\n      <div class=\"col-8\">\r\n        <input\r\n              [(ngModel)]=\"heroe.imagen\"\r\n              class=\"form-control\"\r\n              type=\"file\"\r\n              formControlName=\"imagen\"\r\n              name=imagen\r\n              (change)=\"cargarImagen($event)\">\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"form-group row\">\r\n      <button\r\n              type=\"submit\"\r\n              class=\"btn btn-outline-primary\">Guardar</button>\r\n    </div>\r\n\r\n  </form>\r\n</div>\r\n"

/***/ }),

/***/ 284:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-12 text-right\">\n\n    <table>\n      <tbody>\n        <tr>\n          <td>\n            <nav class=\"navbar navbar-light bg-faded\">\n              <div class=\"form-inline\">\n                <input [(ngModel)]=\"paramBuscar\"\n                  class=\"form-control mr-sm-2\"\n                  type=\"text\"\n                  placeholder=\"Búscar Héroe...\">\n              </div>\n            </nav>\n          </td>\n          <td><br></td>\n          <td>\n            <button (click)=\"agregarHeroe()\"\n            class=\"btn btn-outline-primary\"\n            type=\"button\" name=\"button\">Nuevo Heroe</button>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n</div>\n<br>\n\n<div class=\"container\" *ngIf=\"abrirAlert\">\n\n  <div *ngIf=\"resultadoOperacion\"\n    id=\"successAlert\"\n    class=\"alert alert-success\" role=\"alert\" aria-label=\"Close\">\n    <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n    <strong>Héroe Eliminado!</strong> El Heroe se ha eliminado correctamnete.\n  </div>\n\n  <div *ngIf=\"resultadoOperacion == false\"\n    id=\"errorAlert\"\n    class=\"alert alert-danger\" role=\"alert\" aria-label=\"Close\">\n    <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n    <strong>Error al Eliminar Héroe!</strong> Se presentó un error al eliminar el Héroe.\n  </div>\n\n</div>\n\n<div class=\"row animated fadeIn fast\">\n  <div class=\"col-md-12\">\n    <div class=\"table-responsive\">\n\n      <table class=\"table\" *ngIf=\"heroesList.length > 0\">\n        <thead class=\"thead-inverse\">\n          <tr>\n            <th>id</th>\n            <th>Nombre</th>\n            <th>Poder</th>\n            <th>Casa</th>\n            <th>Imagen</th>\n            <th>Acción</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let heroe of heroesList|search:paramBuscar | paginate: { id: 'id',itemsPerPage: 3,currentPage: page,totalItems: total }; let i = index\">\n            <td><strong>{{heroe.id}}</strong></td>\n            <td>{{heroe.nombre}}</td>\n            <td>{{heroe.poder}}</td>\n            <td>{{heroe.casa}}</td>\n            <td>\n              <img class=\"container-img\"\n              [src]=\"heroe.imagen | sinimagen\"\n              [alt]=\"\">\n            </td>\n            <td class=\"text-right w120\">\n              <button (click)=\"editarHeroe(heroe.id)\"\n                class=\"btn btn-outline-success\"\n                type=\"button\" >\n                Editar\n              </button>\n              <button (click)=\"openDeleteModal(heroe.id)\"\n                class=\"btn btn-outline-danger\"\n                type=\"button\" >\n                Eliminar\n              </button>\n            </td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n  </div>\n</div>\n\n<div *ngIf=\"heroesList.length > 0\">\n\n  <pagination-controls class=\"pagination justify-content-center\"\n                  id=\"id\"\n                  (pageChange)=\"page = $event\"\n                  maxSize=\"4\"\n                  directionLinks=\"true\"\n                  autoHide=\"false\"\n                  previousLabel=\"Anterior\"\n                  nextLabel=\"Siguiente\"\n                  screenReaderPaginationLabel=\"Pagination\"\n                  screenReaderPageLabel=\"page\"\n                  screenReaderCurrentLabel=\"You're on page\">\n  </pagination-controls>\n\n</div>\n\n<div class=\"modal fade\" id=\"deleteModal\"\n  role=\"dialog\"\n  aria-hidden=\"true\"\n  data-backdrop=\"static\"\n  data-keyboard=\"false\">\n<div class=\"modal-dialog\" role=\"document\">\n  <div class=\"modal-content\">\n    <div class=\"modal-header\">\n      <h5 class=\"modal-title\">Elimiar Héroe</h5>\n    </div>\n    <div class=\"modal-body\">\n      <p>Desea Eliminar el Heroe Seleccionado?</p>\n    </div>\n    <div class=\"modal-footer\">\n      <button type=\"button\" class=\"btn btn-primary\" (click)=\"eliminarHeroe()\">Eliminar</button>\n      <button type=\"button\" class=\"btn btn-secondary\" (click)=\"closeDeleteModal()\">Cancelar</button>\n    </div>\n  </div>\n</div>\n</div>\n"

/***/ }),

/***/ 285:
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\r\n  <img class=\"card-img-top logo\" src=\"assets/img/logo.jpg\" alt=\"Card image cap\">\r\n  <div class=\"card-block\">\r\n    <p class=\"card-text texto\">Esta es una app demo definida para intergrar Angular 2 con Spring Boot, Spring 4 utilizado auth0 para la seguridad.</p>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ 286:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n  <nav class=\"navbar navbar-toggleable-md navbar-inverse bg-inverse\">\n  <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNav\" aria-controls=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <span class=\"navbar-brand\">Heroes App</span>\n  <div class=\"collapse navbar-collapse\" id=\"navbarNav\">\n    <ul class=\"navbar-nav\">\n      <li class=\"nav-item\" routerLinkActive=\"active\">\n        <a class=\"nav-link\" [routerLink]=\"['home']\">Home</a>\n      </li>\n      <li *ngIf=\"_authService.isAuthenticated()\"\n        class=\"nav-item\" routerLinkActive=\"active\">\n        <a class=\"nav-link\" [routerLink]=\"['heroes']\">Heroes</a>\n      </li>\n      <li *ngIf=\"_authService.isAuthenticated()\"\n        class=\"nav-item\" routerLinkActive=\"active\">\n        <a class=\"nav-link\" [routerLink]=\"['perfil']\">Perfil</a>\n      </li>\n      <li class=\"nav-item\" routerLinkActive=\"active\">\n        <a class=\"nav-link disabled\">En desarrollo...</a>\n      </li>\n    </ul>\n\n    <span class=\"navbar-text\">\n      <button *ngIf=\"!_authService.isAuthenticated()\"\n        (click)=\"login()\"\n        class=\"btn btn-outline-primary btn-sm\"\n        type=\"button\" name=\"button\">Login</button>\n\n      <button *ngIf=\"_authService.isAuthenticated()\"\n        (click)=\"logout()\"\n        class=\"btn btn-outline-danger btn-sm\"\n        type=\"button\" name=\"button\">Logout</button>\n    </span>\n  </div>\n</nav>\n\n</div>\n"

/***/ }),

/***/ 287:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" *ngIf=\"profile\">\n  <div class=\"col-md-4\">\n\n    <div class=\"container text-center\">\n      <img *ngIf=\"profile.picture\"\n      class=\"profile-img\" [src]=\"profile.picture\" alt=\"\">\n    </div>\n    <hr>\n\n    <div class=\"card text-center\">\n      <div class=\"card-block\">\n        <h5 class=\"card-title\">{{profile.name}}</h5>\n        <p class=\"card-text\">Nombre: <small>{{profile.given_name}}</small></p>\n        <p class=\"card-text\">Sobrenombre: <small>{{profile.nickname}}</small></p>\n        <p class=\"card-text\">Género:\n          <small *ngIf=\"profile.gender == 'male'\">Masculino</small>\n          <small *ngIf=\"profile.gender == 'female'\">Femenino</small>\n        </p>\n        <p class=\"card-text\"><small class=\"text-muted\">La información es solo para fines informativos.</small></p>\n      </div>\n    </div>\n\n  </div>\n</div>\n\n\n<pre>\n<!--{{profile | json}}-->\n</pre>\n"

/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_filter__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_filter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_auth0_js__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_auth0_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_auth0_js__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = (function () {
    function AuthService(router) {
        this.router = router;
        this.auth0 = new __WEBPACK_IMPORTED_MODULE_3_auth0_js__["WebAuth"]({
            clientID: 'XyzKOzmqlW6pUv5J0goQDo2MhAx6jyjJ',
            domain: 'skirrel.auth0.com',
            responseType: 'token id_token',
            audience: 'https://skirrel.auth0.com/userinfo',
            //redirectUri: 'http://localhost:4200/callback',
            redirectUri: 'http://localhost:8090/',
            scope: 'openid profile'
        });
    }
    AuthService.prototype.login = function () {
        this.auth0.authorize();
    };
    AuthService.prototype.handleAuthentication = function () {
        var _this = this;
        this.auth0.parseHash(function (err, authResult) {
            if (authResult && authResult.accessToken && authResult.idToken) {
                window.location.hash = '';
                _this.setSession(authResult);
                _this.router.navigate(['/home']);
            }
            else if (err) {
                _this.router.navigate(['/home']);
                console.log(err);
            }
        });
    };
    AuthService.prototype.setSession = function (authResult) {
        // Set the time that the access token will expire at
        var expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
        localStorage.setItem('access_token', authResult.accessToken);
        localStorage.setItem('id_token', authResult.idToken);
        localStorage.setItem('expires_at', expiresAt);
    };
    AuthService.prototype.logout = function () {
        // Remove tokens and expiry time from localStorage
        localStorage.removeItem('access_token');
        localStorage.removeItem('id_token');
        localStorage.removeItem('expires_at');
        // Go back to the home route
        this.router.navigate(['/']);
    };
    AuthService.prototype.isAuthenticated = function () {
        // Check whether the current time is past the
        // access token's expiry time
        var expiresAt = JSON.parse(localStorage.getItem('expires_at'));
        return new Date().getTime() < expiresAt;
    };
    AuthService.prototype.getProfile = function (cb) {
        var accessToken = localStorage.getItem('access_token');
        if (!accessToken) {
            throw new Error('-- Debe existir el Token para obtener el perfil del usuario --');
        }
        var SELF = this;
        this.auth0.client.userInfo(accessToken, function (err, profile) {
            if (profile) {
                SELF.userProfile = profile;
            }
            cb(err, profile);
        });
    };
    return AuthService;
}());
AuthService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object])
], AuthService);

var _a;
//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ 560:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(167);


/***/ }),

/***/ 70:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeroesService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HeroesService = (function () {
    function HeroesService(_http) {
        this._http = _http;
        this.globalUrl = "http://localhost:8090/heroe";
        this.header = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({
            'Content-Type': 'application/json'
        });
    }
    HeroesService.prototype.findAllHeroes = function () {
        var url = this.globalUrl + "/all";
        return this._http.get(url, { headers: this.header })
            .map(function (response) {
            return response.json();
        });
    };
    ;
    HeroesService.prototype.findHeroe = function (data) {
        var url = this.globalUrl + "/find/" + data;
        return this._http.get(url, { headers: this.header })
            .map(function (response) {
            return response.json();
        });
    };
    ;
    HeroesService.prototype.addHeroe = function (heroe) {
        var url = this.globalUrl + "/add";
        var body = JSON.stringify(heroe);
        return this._http.post(url, body, { headers: this.header })
            .map(function (response) {
            return response.json();
        });
    };
    ;
    HeroesService.prototype.updateHeroe = function (heroe) {
        var url = this.globalUrl + "/put";
        var body = JSON.stringify(heroe);
        return this._http.put(url, body, { headers: this.header })
            .map(function (response) {
            return response.json();
        });
    };
    ;
    HeroesService.prototype.deleteHeroe = function (id) {
        var url = this.globalUrl + "/delete/" + id;
        return this._http.delete(url, { headers: this.header })
            .map(function (response) {
            return response.json();
        });
    };
    ;
    return HeroesService;
}());
HeroesService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object])
], HeroesService);

var _a;
//# sourceMappingURL=heroes.service.js.map

/***/ })

},[560]);
//# sourceMappingURL=main.bundle.js.map