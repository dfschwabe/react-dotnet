.PHONY: run
.DEFAULT_GOAL:= run

run:
	dotnet run --project api &
	npm start --prefix ui
