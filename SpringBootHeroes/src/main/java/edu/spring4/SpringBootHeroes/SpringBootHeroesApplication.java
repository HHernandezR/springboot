package edu.spring4.SpringBootHeroes;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;

@SpringBootApplication
@ComponentScan("edu.spring4.SpringBootHeroes")
@EnableMongoRepositories("edu.spring4.SpringBootHeroes.repository")
public class SpringBootHeroesApplication {

	public static void main(String[] args) {
		SpringApplication.run(SpringBootHeroesApplication.class, args);
	}
}
