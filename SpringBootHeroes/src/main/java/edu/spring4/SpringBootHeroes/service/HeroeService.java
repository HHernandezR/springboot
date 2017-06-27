package edu.spring4.SpringBootHeroes.service;

import java.util.List;

import edu.spring4.SpringBootHeroes.model.HeroeModel;

public interface HeroeService {
	
	List<HeroeModel> findAll();
	List<HeroeModel> findByIdName(String data);
	boolean addHeroe(HeroeModel heroeModel);
	boolean deleteHeroe(String id);
	HeroeModel putHeroe(HeroeModel heroeModel);

}
