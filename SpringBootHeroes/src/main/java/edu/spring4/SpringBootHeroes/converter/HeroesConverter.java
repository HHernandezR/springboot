package edu.spring4.SpringBootHeroes.converter;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import edu.spring4.SpringBootHeroes.document.HeroeDocument;
import edu.spring4.SpringBootHeroes.model.HeroeModel;

@Component
public class HeroesConverter {
	
	private final static Log LOG = LogFactory.getLog(HeroesConverter.class);
	
	@Autowired
	HeroeModel heroeModel;
	
	public HeroeModel documentToModel(HeroeDocument heroeDocument){
		
		try {
			if(heroeDocument != null){
				heroeModel = new HeroeModel();
				heroeModel.setId(heroeDocument.getId().trim());
				heroeModel.setNombre(heroeDocument.getNombre().trim());
				heroeModel.setPoder(heroeDocument.getPoder().trim());
				heroeModel.setCasa(heroeDocument.getCasa().trim());
				heroeModel.setImagen(heroeDocument.getImagen().trim());
				return heroeModel;
			}else{
				return new HeroeModel();
			}
		} catch (Exception e) {
			LOG.error("-- Error en método documentToModel -- ", e);
			return new HeroeModel();
		}
	}
	
	public HeroeDocument modelToDocument(HeroeModel heroeModel){
		try {
			HeroeDocument heroeDocument;
			if (heroeModel.getNombre() != null) {
				heroeDocument = new HeroeDocument();
				
				if(heroeModel.getId() != null && heroeModel.getId() != ""){
					heroeDocument.setId((heroeModel.getId().trim()));
				}
				
				heroeDocument.setNombre(heroeModel.getNombre().trim());
				heroeDocument.setPoder(heroeModel.getPoder().trim());
				heroeDocument.setCasa(heroeModel.getCasa().trim());
				heroeDocument.setImagen(heroeModel.getImagen().trim());
				return heroeDocument;
			} else {
				return new HeroeDocument();
			}
		} catch (Exception e) {
			LOG.error("-- Error en método modelToDocument -- ", e);
			return new HeroeDocument();
		}
	}

}
