package edu.spring4.SpringBootHeroes.repository;

import java.util.List;

import edu.spring4.SpringBootHeroes.document.HeroeDocument;

public interface HeroeRepository{
	
	List<HeroeDocument> findAll();
	List<HeroeDocument> findByIdName(String data);
	boolean addHeroe(HeroeDocument heroeDocument);
	boolean deleteHeroe(String id);
	boolean putHeroe(HeroeDocument heroeDocument);
	
}
