package edu.spring4.SpringBootHeroes.document;

import java.io.Serializable;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import org.hibernate.validator.constraints.NotEmpty;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

@Document(collection = "heroes")
public class HeroeDocument implements Serializable{
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	@Id
	private String id;
	
	@NotNull
	@NotEmpty
	@Size(min = 5, max = 20)
	@Field("nombre")
	@Indexed(unique = true)
	private String nombre;
	
	@NotNull
	@NotEmpty
	@Size(min = 5, max = 20)
	@Field("poder")
	private String poder;
	
	@NotNull
	@NotEmpty
	@Size(min = 5, max = 10)
	@Field("casa")
	private String casa;
	
	@NotNull
	@NotEmpty
	@Field("imagen")
	private String imagen;

	public String getId() {
		return id;
	}
	
	public void setId(String id) {
		this.id = id;
	}

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public String getPoder() {
		return poder;
	}

	public void setPoder(String poder) {
		this.poder = poder;
	}

	public String getCasa() {
		return casa;
	}

	public void setCasa(String casa) {
		this.casa = casa;
	}

	public String getImagen() {
		return imagen;
	}

	public void setImagen(String imagen) {
		this.imagen = imagen;
	}

	public HeroeDocument(String id, String nombre, String poder, String casa, String imagen) {
		super();
		this.id = id;
		this.nombre = nombre;
		this.poder = poder;
		this.casa = casa;
		this.imagen = imagen;
	}

	@Override
	public String toString() {
		return "HeroeRepository [id=" + id + ", nombre=" + nombre + ", poder=" + poder + ", casa=" + casa + ", imagen="
				+ imagen + "]";
	}
	
	public HeroeDocument(){
		
	}

}
