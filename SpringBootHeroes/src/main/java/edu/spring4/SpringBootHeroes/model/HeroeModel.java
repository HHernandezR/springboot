package edu.spring4.SpringBootHeroes.model;

import java.io.Serializable;

import org.springframework.stereotype.Component;

@Component
public class HeroeModel implements Serializable{
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	private String id;
	
	private String nombre;
	
	private String poder;
	
	private String casa;

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

	@Override
	public String toString() {
		return "HeroeModel [id=" + id + ", nombre=" + nombre + ", poder=" + poder + ", casa=" + casa + ", imagen="
				+ imagen + "]";
	}

	public HeroeModel(String id, String nombre, String poder, String casa, String imagen) {
		super();
		this.id = id;
		this.nombre = nombre;
		this.poder = poder;
		this.casa = casa;
		this.imagen = imagen;
	}

	public HeroeModel() {
	}
	
	

}
