//clases de los objetos



//importadoras
class importadoras{

    constructor(importadora_id,importadora_nombre,importadora_descripcion,importadora_telefono,importadora_direccion,importadora_correo,importadora_nit,importadora_red1,importadora_red2){
        this.importadora_id=importadora_id
        this.importadora_nombre=importadora_nombre
        this.importadora_descripcion=importadora_descripcion
        this.importadora_telefono=importadora_telefono
        this.importadora_direccion=importadora_direccion
        this.importadora_correo=importadora_correo
        this.importadora_nit=importadora_nit
        this.importadora_red1=importadora_red1
        this.importadora_red2=importadora_red2
    }

    //importadora_id
    get importadora_id(){
        return this.importadora_id;
    }
    set importadora_id(importadora_id){
        this.importadora_id= importadora_id;
    }

    //importadora_nombre
    get importadora_nombre(){
        return this.importadora_nombre;
    }
    set tipo_nimportadora_nombrembre(importadora_nombre){
        this.importadora_nombre= importadora_nombre;
    }

    //importadora_descripcion
    get importadora_descripcion(){
        return this.importadora_descripcion;
    }
    set importadora_descripcion(importadora_descripcion){
        this.importadora_descripcion= importadora_descripcion;
    }

    //importadora_telefono
    get importadora_telefono(){
        return this.importadora_telefono;
    }
    set importadora_telefono(importadora_telefono){
        this.importadora_telefono= importadora_telefono;
    }

    //importadora_direccion
    get importadora_direccion(){
        return this.importadora_direccion;
    }
    set importadora_direccion(importadora_direccion){
        this.importadora_direccion= importadora_direccion;
    }

    //importadora_correo
    get importadora_correo(){
        return this.importadora_correo;
    }
    set importadora_correo(importadora_correo){
        this.importadora_correo= importadora_correo;
    }

    //importadora_nit
    get importadora_nit(){
        return this.importadora_nit;
    }
    set importadora_nit(importadora_nit){
        this.importadora_nit= importadora_nit;
    }

    //importadora_red1
    get importadora_red1(){
        return this.importadora_red1;
    }
    set importadora_red1(importadora_red1){
        this.importadora_red1= importadora_red1;
    }

    //importadora_red2
    get importadora_red2(){
        return this.importadora_red2;
    }
    set importadora_red2(importadora_red2){
        this.importadora_red2= importadora_red2;
    }
}

//tipo_cliente

class tipo_cliente{

    constructor(tipo_cliente_id,tipo_cliente_nombre){
        this.tipo_cliente_id=tipo_cliente_id
        this.tipo_cliente_nombre=tipo_cliente_nombre
    }

    //tipo_cliente_id
    get tipo_cliente_id(){
        return this.tipo_cliente_id;
    }
    set tipo_cliente_id(tipo_cliente_id){
        this.tipo_cliente_id= tipo_cliente_id;
    }

    //tipo_cliente_nombre
    get tipo_cliente_nombre(){
        return this.tipo_cliente_nombre;
    }
    set tipo_cliente_nombre(tipo_cliente_nombre){
        this.tipo_cliente_nombre= tipo_cliente_nombre;
    }

}

//clientes

class clientes{

    constructor(cliente_id,cliente_nombre,cliente_correo,cliente_contrasena,cliente_cc,cliente_nit){
        this.cliente_id=cliente_id
        this.cliente_nombre=cliente_nombre
        this.cliente_correo=cliente_correo
        this.cliente_contrasena=cliente_contrasena
        this.cliente_cc=cliente_cc
        this.cliente_nit=cliente_nit
    }

    //cliente_id
    get cliente_id(){
        return this.cliente_id;
    }
    set cliente_id(cliente_id){
        this.cliente_id= cliente_id;
    }

    //cliente_nombre
    get cliente_nombre(){
        return this.cliente_nombre;
    }
    set cliente_nombre(cliente_nombre){
        this.cliente_nombre= cliente_nombre;
    }

    //cliente_correo
    get cliente_correo(){
        return this.cliente_correo;
    }
    set cliente_correo(cliente_correo){
        this.cliente_correo= cliente_correo;
    }

    //cliente_contrasena
    get cliente_contrasena(){
        return this.cliente_contrasena;
    }
    set cliente_contrasena(cliente_contrasena){
        this.cliente_contrasena= cliente_contrasena;
    }

    //cliente_cc
    get cliente_cc(){
        return this.cliente_cc;
    }
    set cliente_cc(cliente_cc){
        this.cliente_cc= cliente_cc;
    }

    //cliente_nit
    get cliente_nit(){
        return this.cliente_nit;
    }
    set cliente_nit(cliente_nit){
        this.cliente_nit= cliente_nit;
    }

}

class clientes{

    constructor(cliente_id,cliente_nombre,cliente_correo,cliente_contrasena,cliente_cc,cliente_nit,tipo_cliente_id){
        this.cliente_id=cliente_id
        this.cliente_nombre=cliente_nombre
        this.cliente_correo=cliente_correo
        this.cliente_contrasena=cliente_contrasena
        this.cliente_cc=cliente_cc
        this.cliente_nit=cliente_nit
    }

    //cliente_id
    get cliente_id(){
        return this.cliente_id;
    }
    set cliente_id(cliente_id){
        this.cliente_id= cliente_id;
    }

    //cliente_nombre
    get cliente_nombre(){
        return this.cliente_nombre;
    }
    set cliente_nombre(cliente_nombre){
        this.cliente_nombre= cliente_nombre;
    }

    //cliente_correo
    get cliente_correo(){
        return this.cliente_correo;
    }
    set cliente_correo(cliente_correo){
        this.cliente_correo= cliente_correo;
    }

    //cliente_contrasena
    get cliente_contrasena(){
        return this.cliente_contrasena;
    }
    set cliente_contrasena(cliente_contrasena){
        this.cliente_contrasena= cliente_contrasena;
    }

    //cliente_cc
    get cliente_cc(){
        return this.cliente_cc;
    }
    set cliente_cc(cliente_cc){
        this.cliente_cc= cliente_cc;
    }

    //cliente_nit
    get cliente_nit(){
        return this.cliente_nit;
    }
    set cliente_nit(cliente_nit){
        this.cliente_nit= cliente_nit;
    }

    //tipo_cliente_id
    get tipo_cliente_id(){
        return this.tipo_cliente_id;
    }
    set tipo_cliente_id(tipo_cliente_id){
        this.tipo_cliente_id= tipo_cliente_id;
    }

}

//empleado_cargo

class empleado_cargo{

    constructor(empleado_cargo_id,empleado_cargo_nombre){
        this.empleado_cargo_id=empleado_cargo_id
        this.empleado_cargo_nombre=empleado_cargo_nombre
    }

    //empleado_cargo_id
    get empleado_cargo_id(){
        return this.empleado_cargo_id;
    }
    set empleado_cargo_id(empleado_cargo_id){
        this.empleado_cargo_id= empleado_cargo_id;
    }

    //empleado_cargo_nombre
    get empleado_cargo_nombre(){
        return this.empleado_cargo_nombre;
    }
    set empleado_cargo_nombre(empleado_cargo_nombre){
        this.empleado_cargo_nombre= empleado_cargo_nombre;
    }

}

//empleado_estado
class empleado_estado{

    constructor(empleado_estado_id,empleado_estado_nombre){
        this.empleado_estado_id=empleado_estado_id
        this.empleado_estado_nombre=empleado_estado_nombre
    }

    //empleado_cargo_id
    get empleado_estado_id(){
        return this.empleado_estado_id;
    }
    set empleado_estado_id(empleado_estado_id){
        this.empleado_estado_id= empleado_estado_id;
    }

    //empleado_cargo_nombre
    get empleado_estado_nombre(){
        return this.empleado_estado_nombre;
    }
    set empleado_estado_nombre(empleado_estado_nombre){
        this.empleado_estado_nombre= empleado_estado_nombre;
    }
}

//empleados
class empleados{

    constructor(empleado_id,empleado_nombre,empleado_correo,empleado_contrasena,empleado_cc){
        this.empleado_id=empleado_id
        this.empleado_nombre=empleado_nombre
        this.empleado_correo=empleado_correo
        this.empleado_contrasena=empleado_contrasena
        this.empleado_cc=empleado_cc
    }

    //empleado_id
    get empleado_id(){
        return this.empleado_id;
    }

    set empleado_id(empleado_id){
        this.empleado_id= empleado_id;
    }

    //empleado_nombre
    get empleado_nombre(){
        return this.empleado_nombre;
    }
    set empleado_nombre(empleado_nombre){
        this.empleado_nombre= empleado_nombre;
    }

    //empleado_correo
    get empleado_correo(){
        return this.empleado_correo;
    }
    set empleado_correo(empleado_correo){
        this.empleado_correo= empleado_correo;
    }

    //empleado_contrasena
    get empleado_contrasena(){
        return this.empleado_contrasena;
    }
    set empleado_contrasena(empleado_contrasena){
        this.empleado_contrasena= empleado_contrasena;
    }

    //empleado_cc
    get empleado_cc(){
        return this.empleado_cc;
    }
    set empleado_cc(empleado_cc){
        this.empleado_cc= empleado_cc;
    }

    //empleado_cargo_id
    get empleado_cargo_id(){
        return this.empleado_cargo_id;
    }
    set empleado_cargo_id(empleado_cargo_id){
        this.empleado_cargo_id= empleado_cargo_id;
    }

    //empleado_estado_id
    get empleado_estado_id(){
        return this.empleado_estado_id;
    }
    set empleado_estado_id(empleado_estado_id){
        this.empleado_estado_id= empleado_estado_id;
    }
}

//vehiculos_categoria
class vehiculos_categoria{

    constructor(vehiculos_categoria_id,vehiculos_categoria_nombre){
        this.vehiculos_categoria_id=vehiculos_categoria_id
        this.vehiculos_categoria_nombre=vehiculos_categoria_nombre
    }

    //vehiculos_categoria_id
    get vehiculos_categoria_id(){
        return this.vehiculos_categoria_id;
    }

    set vehiculos_categoria_id(vehiculos_categoria_id){
        this.vehiculos_categoria_id= vehiculos_categoria_id;
    }

    //vehiculos_categoria_nombre
    get vehiculos_categoria_nombre(){
        return this.vehiculos_categoria_nombre;
    }
    set vehiculos_categoria_nombre(vehiculos_categoria_nombre){
        this.vehiculos_categoria_nombre= vehiculos_categoria_nombre;
    }
}


//vehiculos_marca
class vehiculos_marca{

    constructor(vehiculos_marca_id,vehiculos_marca_nombre){
        this.vehiculos_marca_id=vehiculos_marca_id
        this.vehiculos_marca_nombre=vehiculos_marca_nombre
    }

    //vehiculos_marca_id
    get vehiculos_marca_id(){
        return this.vehiculos_marca_id;
    }
    set vehiculos_marca_id(vehiculos_marca_id){
        this.vehiculos_marca_id= vehiculos_marca_id;
    }

    //vehiculos_marca_nombre
    get vehiculos_marca_nombre(){
        return this.vehiculos_marca_nombre;
    }
    set vehiculos_marca_nombre(vehiculos_marca_nombre){
        this.vehiculos_marca_nombre= vehiculos_marca_nombre;
    }
}

//vehiculos_tipo
class vehiculos_tipo{

    constructor(vehiculos_tipo_id,vehiculos_tipo_nombre){
        this.vehiculos_tipo_id=vehiculos_tipo_id
        this.vehiculos_tipo_nombre=vehiculos_tipo_nombre
    }

    //vehiculos_tipo_id
    get vehiculos_tipo_id(){
        return this.vehiculos_tipo_id;
    }
    set vehiculos_tipo_id(vehiculos_tipo_id){
        this.vehiculos_tipo_id= vehiculos_tipo_id;
    }

    //vehiculos_tipo_nombre
    get vehiculos_tipo_nombre(){
        return this.vehiculos_tipo_nombre;
    }
    set vehiculos_tipo_nombre(vehiculos_tipo_nombre){
        this.vehiculos_tipo_nombre= vehiculos_tipo_nombre;
    }
}

//vehiculos_motor
class vehiculos_motor{

    constructor(vehiculos_motor_id,vehiculos_motor_nombre){
        this.vehiculos_motor_id=vehiculos_motor_id
        this.vehiculos_motor_nombre=vehiculos_motor_nombre
    }

    //vehiculos_motor_id
    get vehiculos_motor_id(){
        return this.vehiculos_motor_id;
    }
    set vehiculos_motor_id(vehiculos_motor_id){
        this.vehiculos_motor_id= vehiculos_motor_id;
    }

    //vehiculos_motor_nombre
    get vehiculos_motor_nombre(){
        return this.vehiculos_motor_nombre;
    }
    set vehiculos_motor_nombre(vehiculos_motor_nombre){
        this.vehiculos_motor_nombre= vehiculos_motor_nombre;
    }
}

//vehiculos_trasmision
class vehiculos_trasmision{

    constructor(vehiculos_trasmision_id,vehiculos_trasmision_nombre){
        this.vehiculos_trasmision_id=vehiculos_trasmision_id
        this.vehiculos_trasmision_nombre=vehiculos_trasmision_nombre
    }

    //vehiculos_trasmision_id
    get vehiculos_trasmision_id(){
        return this.vehiculos_trasmision_id;
    }
    set vehiculos_trasmision_id(vehiculos_trasmision_id){
        this.vehiculos_trasmision_id= vehiculos_trasmision_id;
    }

    //vehiculos_trasmision_nombre
    get vehiculos_trasmision_nombre(){
        return this.vehiculos_trasmision_nombre;
    }
    set vehiculos_trasmision_nombre(vehiculos_trasmision_nombre){
        this.vehiculos_trasmision_nombre= vehiculos_trasmision_nombre;
    }
}

//vehiculos
class vehiculos{

    constructor(vehiculo_id,vehiculo_nombre,vehiculo_ano,vehiculo_cilindraje,vehiculo_potencia,vehiculo_velocidades,vehiculo_puertas,vehiculo_cuatroporcuatro,vehiculo_garantiaano,vehiculo_garantiakm,vehiculo_tecnologia1,vehiculo_tecnologia2,vehiculo_tecnologia3,vehiculo_tecnologia4,vehiculo_foto1,vehiculo_foto2,vehiculo_foto3,vehiculo_foto4,vehiculo_foto5,vehiculo_video,vehiculo_descripcion,vehiculos_categoria_id,vehiculos_marca_id,vehiculos_tipo_id,vehiculos_motor_id,vehiculos_trasmision_id){
        this.vehiculo_id=vehiculo_id
        this.vehiculo_nombre=vehiculo_nombre
        this.vehiculo_ano=vehiculo_ano
        this.vehiculo_cilindraje=vehiculo_cilindraje
        this.vehiculo_potencia=vehiculo_potencia
        this.vehiculo_velocidades=vehiculo_velocidades
        this.vehiculo_puertas=vehiculo_puertas
        this.vehiculo_cuatroporcuatro=vehiculo_cuatroporcuatro
        this.vehiculo_garantiaano=vehiculo_garantiaano
        this.vehiculo_garantiakm=vehiculo_garantiakm
        this.vehiculo_tecnologia1=vehiculo_tecnologia1
        this.vehiculo_tecnologia2=vehiculo_tecnologia2
        this.vehiculo_tecnologia3=vehiculo_tecnologia3
        this.vehiculo_tecnologia4=vehiculo_tecnologia4
        this.vehiculo_foto1=vehiculo_foto1
        this.vehiculo_foto2=vehiculo_foto2
        this.vehiculo_foto3=vehiculo_foto3
        this.vehiculo_foto4=vehiculo_foto4
        this.vehiculo_foto5=vehiculo_foto5
        this.vehiculo_video=vehiculo_video
        this.vehiculo_descripcion=vehiculo_descripcion
        this.vehiculos_categoria_id=vehiculos_categoria_id
        this.vehiculos_marca_id=vehiculos_marca_id
        this.vehiculos_tipo_id=vehiculos_tipo_id
        this.vehiculos_motor_id=vehiculos_motor_id
        this.vehiculos_trasmision_id=vehiculos_trasmision_id
    }

    //vehiculo_id
    get vehiculo_id(){
        return this.vehiculo_id;
    }
    set vehiculo_id(vehiculo_id){
        this.vehiculo_id= vehiculo_id;
    }

    //vehiculo_nombre
    get vehiculo_nombre(){
        return this.vehiculo_nombre;
    }
    set vehiculo_nombre(vehiculo_nombre){
        this.vehiculo_nombre= vehiculo_nombre;
    }

    //vehiculo_ano
    get vehiculo_ano(){
        return this.vehiculo_ano;
    }
    set vehiculo_ano(vehiculo_ano){
        this.vehiculo_ano= vehiculo_ano;
    }

    //vehiculo_cilindraje
    get vehiculo_cilindraje(){
        return this.vehiculo_cilindraje;
    }
    set vehiculo_cilindraje(vehiculo_cilindraje){
        this.vehiculo_cilindraje= vehiculo_cilindraje;
    }

    //vehiculo_potencia
    get vehiculo_potencia(){
        return this.vehiculo_potencia;
    }
    set vehiculo_potencia(vehiculo_potencia){
        this.vehiculo_potencia= vehiculo_potencia;
    }

    //vehiculo_velocidades
    get vehiculo_velocidades(){
        return this.vehiculo_velocidades;
    }
    set vehiculo_velocidades(vehiculo_velocidades){
        this.vehiculo_velocidades= vehiculo_velocidades;
    }

    //vehiculo_puertas
    get vehiculo_puertas(){
        return this.vehiculo_puertas;
    }
    set vehiculo_puertas(vehiculo_puertas){
        this.vehiculo_puertas= vehiculo_puertas;
    }

    //vehiculo_cuatroporcuatro
    get vehiculo_cuatroporcuatro(){
        return this.vehiculo_cuatroporcuatro;
    }
    set vehiculo_cuatroporcuatro(vehiculo_cuatroporcuatro){
        this.vehiculo_cuatroporcuatro= vehiculo_cuatroporcuatro;
    }

    //vehiculo_garantiaano
    get vehiculo_garantiaano(){
        return this.vehiculo_garantiaano;
    }
    set vehiculo_garantiaano(vehiculo_garantiaano){
        this.vehiculo_garantiaano= vehiculo_garantiaano;
    }

    //vehiculo_garantiakm
    get vehiculo_garantiakm(){
        return this.vehiculo_garantiakm;
    }
    set vehiculo_garantiakm(vehiculo_garantiakm){
        this.vehiculo_garantiakm= vehiculo_garantiakm;
    }

    //vehiculo_tecnologia1
    get vehiculo_tecnologia1(){
        return this.vehiculo_tecnologia1;
    }
    set vehiculo_tecnologia1(vehiculo_tecnologia1){
        this.vehiculo_tecnologia1= vehiculo_tecnologia1;
    }

    //vehiculo_tecnologia2
    get vehiculo_tecnologia2(){
        return this.vehiculo_tecnologia2;
    }
    set vehiculo_tecnologia2(vehiculo_tecnologia2){
        this.vehiculo_tecnologia2= vehiculo_tecnologia2;
    }

    //vehiculo_tecnologia3
    get vehiculo_tecnologia3(){
        return this.vehiculo_tecnologia3;
    }
    set vehiculo_tecnologia3(vehiculo_tecnologia3){
        this.vehiculo_tecnologia3= vehiculo_tecnologia3;
    }

    //vehiculo_tecnologia4
    get vehiculo_tecnologia4(){
        return this.vehiculo_tecnologia4;
    }
    set vehiculo_tecnologia4(vehiculo_tecnologia4){
        this.vehiculo_tecnologia4= vehiculo_tecnologia4;
    }

    //vehiculo_foto1
    get vehiculo_foto1(){
        return this.vehiculo_foto1;
    }
    set vehiculo_foto1(vehiculo_foto1){
        this.vehiculo_foto1= vehiculo_foto1;
    }

    //vehiculo_foto2
    get vehiculo_foto2(){
        return this.vehiculo_foto2;
    }
    set vehiculo_foto2(vehiculo_foto2){
        this.vehiculo_foto2= vehiculo_foto2;
    }

    //vehiculo_foto3
    get vehiculo_foto3(){
        return this.vehiculo_foto3;
    }
    set vehiculo_foto3(vehiculo_foto3){
        this.vehiculo_foto3= vehiculo_foto3;
    }

    //vehiculo_foto4
    get vehiculo_foto4(){
        return this.vehiculo_foto4;
    }
    set vehiculo_foto4(vehiculo_foto4){
        this.vehiculo_foto4= vehiculo_foto4;
    }

    //vehiculo_foto5
    get vehiculo_foto5(){
        return this.vehiculo_foto5;
    }
    set vehiculo_foto5(vehiculo_foto5){
        this.vehiculo_foto5= vehiculo_foto5;
    }

    //vehiculo_descripcion
    get vehiculo_descripcion(){
        return this.vehiculo_descripcion;
    }
    set vehiculo_descripcion(vehiculo_descripcion){
        this.vehiculo_descripcion= vehiculo_descripcion;
    }

    //vehiculos_categoria_id
    get vehiculos_categoria_id(){
        return this.vehiculos_categoria_id;
    }

    set vehiculos_categoria_id(vehiculos_categoria_id){
        this.vehiculos_categoria_id= vehiculos_categoria_id;
    }

    //vehiculos_marca_id
    get vehiculos_marca_id(){
        return this.vehiculos_marca_id;
    }
    set vehiculos_marca_id(vehiculos_marca_id){
        this.vehiculos_marca_id= vehiculos_marca_id;
    }

    //vehiculos_tipo_id
    get vehiculos_tipo_id(){
        return this.vehiculos_tipo_id;
    }
    set vehiculos_tipo_id(vehiculos_tipo_id){
        this.vehiculos_tipo_id= vehiculos_tipo_id;
    }

    //vehiculos_motor_id
    get vehiculos_motor_id(){
        return this.vehiculos_motor_id;
    }
    set vehiculos_motor_id(vehiculos_motor_id){
        this.vehiculos_motor_id= vehiculos_motor_id;
    }

    //vehiculos_trasmision_id
    get vehiculos_trasmision_id(){
        return this.vehiculos_trasmision_id;
    }
    set vehiculos_trasmision_id(vehiculos_trasmision_id){
        this.vehiculos_trasmision_id= vehiculos_trasmision_id;
    }
}

//inventarios
class inventarios{

    constructor(inventario_id,inventario_cantidad,inventario_precio,inventario_color,vehiculo_id){
        this.inventario_id=inventario_id
        this.inventario_cantidad=inventario_cantidad
        this.inventario_precio=inventario_precio
        this.inventario_color=inventario_color
    }

    //inventario_id
    get inventario_id(){
        return this.inventario_id;
    }
    set inventario_id(inventario_id){
        this.inventario_id= inventario_id;
    }

    //inventario_cantidad
    get inventario_cantidad(){
        return this.inventario_cantidad;
    }
    set inventario_cantidad(inventario_cantidad){
        this.inventario_cantidad= inventario_cantidad;
    }

    //inventario_precio
    get inventario_precio(){
        return this.inventario_precio;
    }
    set inventario_precio(inventario_precio){
        this.inventario_precio= inventario_precio;
    }

    //inventario_color
    get inventario_color(){
        return this.inventario_color;
    }
    set inventario_color(inventario_color){
        this.inventario_color= inventario_color;
    }

    //vehiculo_id
    get vehiculo_id(){
        return this.vehiculo_id;
    }
    set vehiculo_id(vehiculo_id){
        this.vehiculo_id= vehiculo_id;
    }
}

//facturas_estado
class facturas_estado{

    constructor(facturas_estado_id,facturas_estado_nombre){
        this.facturas_estado_id=facturas_estado_id
        this.facturas_estado_nombre=facturas_estado_nombre
    }

    //facturas_estado_id
    get facturas_estado_id(){
        return this.facturas_estado_id;
    }
    set facturas_estado_id(facturas_estado_id){
        this.facturas_estado_id= facturas_estado_id;
    }

    //facturas_estado_nombre
    get facturas_estado_nombre(){
        return this.facturas_estado_nombre;
    }
    set facturas_estado_nombre(facturas_estado_nombre){
        this.facturas_estado_nombre= facturas_estado_nombre;
    }
}

//facturas
class facturas{

    constructor(factura_id,factura_fechainicial,factura_fechaconfirmacion,factura_valor,factura_iva,factura_total,cliente_id,empleado_id,facturas_estado_id){
        this.factura_id=factura_id
        this.factura_fechainicial=factura_fechainicial
        this.factura_fechaconfirmacion=factura_fechaconfirmacion
        this.factura_valor=factura_valor
        this.factura_iva=factura_iva
        this.factura_total=factura_total
        this.cliente_id=cliente_id
        this.empleado_id=empleado_id
        this.facturas_estado_id=facturas_estado_id
    }

    //factura_id
    get factura_id(){
        return this.factura_id;
    }
    set factura_id(factura_id){
        this.factura_id= factura_id;
    }

    //factura_fechainicial
    get factura_fechainicial(){
        return this.factura_fechainicial;
    }
    set factura_fechainicial(factura_fechainicial){
        this.factura_fechainicial= factura_fechainicial;
    }

    //factura_fechaconfirmacion
    get factura_fechaconfirmacion(){
        return this.factura_fechaconfirmacion;
    }
    set factura_fechaconfirmacion(factura_fechaconfirmacion){
        this.factura_fechaconfirmacion= factura_fechaconfirmacion;
    }

    //factura_valor
    get factura_valor(){
        return this.factura_valor;
    }
    set factura_valor(factura_valor){
        this.factura_valor= factura_valor;
    }

    //factura_iva
    get factura_iva(){
        return this.factura_iva;
    }
    set factura_iva(factura_iva){
        this.factura_iva= factura_iva;
    }

    //factura_total
    get factura_total(){
        return this.factura_total;
    }
    set factura_total(factura_total){
        this.factura_total= factura_total;
    }

    //cliente_id
    get cliente_id(){
        return this.cliente_id;
    }
    set cliente_id(cliente_id){
        this.cliente_id= cliente_id;
    }

    //empleado_id
    get empleado_id(){
        return this.empleado_id;
    }
    set empleado_id(empleado_id){
        this.empleado_id= empleado_id;
    }

    //facturas_estado_id
    get facturas_estado_id(){
        return this.facturas_estado_id;
    }
    set facturas_estado_id(facturas_estado_id){
        this.facturas_estado_id= facturas_estado_id;
    }
}

//ordenes
class ordenes{

    constructor(orden_id,orden_cantidad,orden_color,vehiculo_id,factura_id){
        this.orden_id=orden_id
        this.orden_cantidad=orden_cantidad
        this.orden_color=orden_color
        this.vehiculo_id=vehiculo_id
        this.factura_id=factura_id
    }

    //orden_id
    get orden_id(){
        return this.orden_id;
    }
    set orden_id(orden_id){
        this.orden_id= orden_id;
    }

    //orden_cantidad
    get orden_cantidad(){
        return this.orden_cantidad;
    }
    set orden_cantidad(orden_cantidad){
        this.orden_cantidad= orden_cantidad;
    }

    //orden_color
    get orden_color(){
        return this.orden_color;
    }
    set orden_color(orden_color){
        this.orden_color= orden_color;
    }

    //vehiculo_id
    get vehiculo_id(){
        return this.vehiculo_id;
    }
    set vehiculo_id(vehiculo_id){
        this.vehiculo_id= vehiculo_id;
    }

    //factura_id
    get factura_id(){
        return this.factura_id;
    }
    set factura_id(factura_id){
        this.factura_id= factura_id;
    }
}