package edu.spring4.SpringBootHeroes.service.impl;

import java.util.ArrayList;
import java.util.List;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import edu.spring4.SpringBootHeroes.converter.HeroesConverter;
import edu.spring4.SpringBootHeroes.document.HeroeDocument;
import edu.spring4.SpringBootHeroes.model.HeroeModel;
import edu.spring4.SpringBootHeroes.repository.HeroeRepository;
import edu.spring4.SpringBootHeroes.service.HeroeService;

@Service
@Transactional
public class HeroeServiceImpl implements HeroeService{
	
	private final static Log LOG = LogFactory.getLog(HeroeServiceImpl.class);
	
	@Autowired
	HeroeRepository heroeRepository;
	
	@Autowired
	HeroesConverter heroesConverter;
	
	@Autowired
	HeroeModel heroeModel;

	@Override
	@Transactional
	public List<HeroeModel> findAll() {
		List<HeroeDocument> heroeDocumentLista;
		List<HeroeModel> heroeModelLista = new ArrayList<>();
		
		try {
			
			heroeDocumentLista = heroeRepository.findAll();
			
			if(heroeDocumentLista != null && !heroeDocumentLista.isEmpty()){
				for (HeroeDocument heroeDocument : heroeDocumentLista) {
					heroeModel = new HeroeModel();
					heroeModel = heroesConverter.documentToModel(heroeDocument);
					heroeModelLista.add(heroeModel);
				}
				return heroeModelLista;
			}else{
				return heroeModelLista;
			}
		
		} catch (Exception e) {
			LOG.error("-- Error en método findAll -- ", e);
			return heroeModelLista;
		}
		
	}

	@Override
	@Transactional
	public List<HeroeModel> findByIdName(String data) {
		List<HeroeDocument> heroeDocumentLista;
		List<HeroeModel> heroeModelLista = new ArrayList<>();
		
		if (data != null && data != "") {
		
			try {
				heroeDocumentLista = heroeRepository.findByIdName(data);
				
				if(heroeDocumentLista != null && !heroeDocumentLista.isEmpty()){
					for (HeroeDocument heroeDocument : heroeDocumentLista) {
						heroeModel = new HeroeModel();
						heroeModel = heroesConverter.documentToModel(heroeDocument);
						heroeModelLista.add(heroeModel);
					}
					return heroeModelLista;
				}else{
					return heroeModelLista;
				}
			} catch (Exception e) {
				LOG.error("-- Error en método findByIdName -- ", e);
				return heroeModelLista;
			}
			
		} else {
			LOG.error("-- Error en método findByIdName, valor de búsqueda: " +data+ " --");
			return heroeModelLista;
		}
	}

	@Override
	@Transactional
	public boolean addHeroe(HeroeModel heroeModel) {
		boolean bandera = false;
		try {
			if (heroeModel.getNombre() != null) {
				bandera = heroeRepository.addHeroe(heroesConverter.modelToDocument(heroeModel));
			}else{
				LOG.error("-- Error en método addHeroe, valor de insersión: " +heroeModel.toString()+ " --");
			}
			
		} catch (Exception e) {
			LOG.error("-- Error en método addHeroe -- ", e);
		}
		return bandera;
	};
	
	@Override
	@Transactional
	public boolean deleteHeroe(String id) {
		boolean bandera = false;
		try {
			if (id != null && id != "") {
				bandera = heroeRepository.deleteHeroe(id);
			}else{
				LOG.error("-- Error en método deleteHeroe, valor de búsqueda: " +id+ " --");
			}
		} catch (Exception e) {
			LOG.error("-- Error en método deleteHeroe -- ", e);
		}
		return bandera;
	};
	
	@Override
	@Transactional
	public HeroeModel putHeroe(HeroeModel heroeMode) {
		boolean bandera = false;
		try {
			if (heroeMode.getId() != null) {
				bandera = heroeRepository.putHeroe(heroesConverter.modelToDocument(heroeMode));
				if(bandera){
					return heroeMode;
				}else{
					return new HeroeModel();
				}
			}else{
				LOG.error("-- Error en método putHeroe, valor de actualización: " +heroeMode.toString()+ " --");
				return new HeroeModel();
			}
		} catch (Exception e) {
			LOG.error("-- Error en método deleteHeroe -- ", e);
			return new HeroeModel();
		}
	};
	

}
