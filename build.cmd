@echo off
cmd.exe /c yarn.cmd
cmd.exe /c ".\node_modules\.bin\webpack.cmd"
echo @IF EXIST "%%~dp0node.exe" ( > .\bin\itemize.cmd
echo   "%%~dp0node.exe"  "%%~dp0itemize.js" %%*  >> .\bin\itemize.cmd
echo ) ELSE (  >> .\bin\itemize.cmd
echo   @SETLOCAL >> .\bin\itemize.cmd
echo   @SET PATHEXT=%%PATHEXT:;.JS;=;%% >> .\bin\itemize.cmd
echo   node  "%%~dp0itemize.js" %%* >> .\bin\itemize.cmd
echo ) >> .\bin\itemize.cmd
