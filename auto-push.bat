@echo off
:loop

git add .

git diff --cached --quiet
if %errorlevel%==0 (
    echo Nenhuma mudança...
) else (
    git commit -m "auto update"
    git push
    echo Enviado!
)

timeout /t 60 >nul
goto loop