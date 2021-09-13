spellcheck:
	docker run -it --mount type=bind,source="$(shell pwd)",target=/academy spellchecker python -m pyspelling --config spellcheck.yaml
