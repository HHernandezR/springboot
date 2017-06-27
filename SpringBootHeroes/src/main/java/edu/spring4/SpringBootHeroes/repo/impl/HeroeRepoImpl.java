package edu.spring4.SpringBootHeroes.repo.impl;

import java.util.ArrayList;
import java.util.List;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.stereotype.Repository;

import com.mongodb.WriteResult;

import edu.spring4.SpringBootHeroes.document.HeroeDocument;
import edu.spring4.SpringBootHeroes.repository.HeroeRepository;

import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.core.query.Update;

@Repository
public class HeroeRepoImpl implements HeroeRepository{
	
	private final static Log LOG = LogFactory.getLog(HeroeRepoImpl.class);
	
	@Autowired
	MongoTemplate mongoTemplate;
	
	public final String COLECTION_HEROE = "heroes";
	
	@Override
	public List<HeroeDocument> findAll() {
		List<HeroeDocument> heroeDocumentLista;
		try {
			
			heroeDocumentLista = mongoTemplate.findAll(HeroeDocument.class, COLECTION_HEROE);
			if(heroeDocumentLista != null && !heroeDocumentLista.isEmpty()){
				return heroeDocumentLista;
			}else{
				return heroeDocumentLista = new ArrayList<>();
			}
			
		} catch (Exception e) {
			LOG.error("-- Error en método findAll -- ", e);
			return heroeDocumentLista = new ArrayList<>();
		}
	};

	@Override
	public List<HeroeDocument> findByIdName(String data) {
		List<HeroeDocument> heroeDocumentLista;
		Query query;
		try {
			query = new Query(Criteria.where("nombre").is(data));
			heroeDocumentLista = mongoTemplate.find(query, HeroeDocument.class);
			if(heroeDocumentLista != null && !heroeDocumentLista.isEmpty()){
				return heroeDocumentLista;
			}else{
				query = new Query(Criteria.where("id").is(data));
				heroeDocumentLista = mongoTemplate.find(query, HeroeDocument.class);
				if(heroeDocumentLista != null && !heroeDocumentLista.isEmpty()){
					return heroeDocumentLista;
				} else {
					return heroeDocumentLista = new ArrayList<>();
				}
			}
		} catch (Exception e) {
			LOG.error("-- Error en método findByIdName -- ", e);
			return heroeDocumentLista = new ArrayList<>();
		}
	}

	@Override
	public boolean addHeroe(HeroeDocument heroeDocument) {
		boolean bandera = false;
		try {
			if (heroeDocument != null) {
				mongoTemplate.insert(heroeDocument);
				bandera = true;
			}
		} catch (Exception e) {
			LOG.error("-- Error en método addHeroe -- ", e);
		}
		return bandera;
	};
	
	@Override
	public boolean deleteHeroe(String id) {
		WriteResult writeResult;
		boolean bandera = false;
		Query query;
		try {
			if (id != null && id != "0") {
				query = new Query(Criteria.where("id").is(id));
				writeResult = mongoTemplate.remove(query,HeroeDocument.class);
				bandera = (writeResult.getN() >= 1)?true:false;
			}
		} catch (Exception e) {
			LOG.error("-- Error en método removeHeroe -- ", e);
		}
		return bandera;
	};
	
	@Override
	public boolean putHeroe(HeroeDocument heroeDocument) {
		WriteResult writeResult;
		boolean bandera = false;
		Query query;
		Update update;
		try {
			if (heroeDocument != null) {
				update = new Update();
				query = new Query(Criteria.where("id").is(heroeDocument.getId()));
				
				update.set("nombre", heroeDocument.getNombre());
				update.set("poder", heroeDocument.getPoder());
				update.set("casa", heroeDocument.getCasa());
				update.set("imagen", heroeDocument.getImagen());
				
				writeResult = mongoTemplate.updateFirst(query, update, HeroeDocument.class);
				bandera = (writeResult.getN() >= 1)? true : false;
				return bandera;
			}
		} catch (Exception e) {
			LOG.error("-- Error en método removeHeroe -- ", e);
		}
		return bandera;
	};


}
