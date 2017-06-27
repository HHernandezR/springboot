package edu.spring4.SpringBootHeroes.controller;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class AppController {
	
	private final static Log LOG = LogFactory.getLog(AppController.class);
	
	@RequestMapping("/")
    String index(){
		LOG.info("-- Ejecutando Index --");
        return "index";
    }

}
