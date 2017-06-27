package edu.spring4.SpringBootHeroes.controller;

import java.util.List;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import edu.spring4.SpringBootHeroes.model.HeroeModel;
import edu.spring4.SpringBootHeroes.service.HeroeService;

@RestController
@RequestMapping(value = "/heroe")
public class HeroeController {
	
	//URL Peticiones= http://localhost:8090/heroe
	
	private final static Log LOG = LogFactory.getLog(HeroeController.class);
	
	@Autowired
	HeroeService heroeService;
	
	@GetMapping(value = "/all", headers="Accept=application/json",produces = "application/json")
	public ResponseEntity<List<HeroeModel>> getAllHeroe() {
		ResponseEntity<List<HeroeModel>> responseEntity = null;
		try {
			responseEntity = new ResponseEntity<>(heroeService.findAll(), HttpStatus.OK);
			LOG.info("-- Return getAllHeroe " + responseEntity.toString() + " --");
		} catch (Exception e) {
			LOG.error("-- Error en método getAllHeroe -- ", e);
			responseEntity = new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
		return responseEntity;
	};
	
	@GetMapping(value = "/find/{data}", headers="Accept=application/json",produces = "application/json")
	public ResponseEntity<List<HeroeModel>> getHeroeByIdName(@PathVariable String data) {
		ResponseEntity<List<HeroeModel>> responseEntity = null;
		try {
			responseEntity = new ResponseEntity<>(heroeService.findByIdName(data.trim()), HttpStatus.OK);
			LOG.info("-- Return getHeroeByIdName " + responseEntity.toString() + " --");
		} catch (Exception e) {
			LOG.error("-- Error en método getHeroeByIdName -- ", e);
			responseEntity = new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
		return responseEntity;
	};
	
	@PostMapping(value = "/add", headers="Accept=application/json",produces = "application/json")
	public boolean addHeroe(@RequestBody HeroeModel heroeModel) {
		boolean bandera = false;
		try {
			bandera = heroeService.addHeroe(heroeModel);
			LOG.info("-- Return addHeroe " + bandera + " --");
		} catch (Exception e) {
			LOG.error("-- Error en método addHeroe -- ", e);
		}
		return bandera;
	};
	
	@DeleteMapping(value = "/delete/{id}", headers="Accept=application/json",produces = "application/json")
	public boolean deleteHeroe(@PathVariable String id) {
		boolean bandera = false;
		try {
			bandera = heroeService.deleteHeroe(id);
			LOG.info("-- Return deleteHeroe " + bandera + " --");
		} catch (Exception e) {
			LOG.error("-- Error en método deleteHeroe -- ", e);
		}
		return bandera;
	};
	
	@PutMapping(value = "/put", headers="Accept=application/json",produces = "application/json")
	public ResponseEntity<HeroeModel> putHeroe(@RequestBody HeroeModel heroeModel) {
		ResponseEntity<HeroeModel> responseEntity = null;
		try {
			responseEntity = new ResponseEntity<>(heroeService.putHeroe(heroeModel), HttpStatus.OK);
			LOG.info("-- Return putHeroe " + responseEntity.toString() + " --");
		} catch (Exception e) {
			LOG.error("-- Error en método putHeroe -- ", e);
			responseEntity = new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
		return responseEntity;
	};

}
