@echo off
setlocal ENABLEDELAYEDEXPANSION




set /p input="Enter equation: "
echo %input%

set index=0

for %%a in (%input%) do (
    set array[!index!]=%%a
    set /a index+=1
)

echo %array[1]%

set /a number_1=%array[0]%
set /a number_2=%array[2]%
set /a number_3=0

if "%array[1]%"=="+" (
    set /a number_3=!number_1! + !number_2!
    echo !number_3!

    if !number_3!==100 (
        set /p open_website="Start e3?(1.yes 2.no)"
        if "!open_website!"=="yes" (
            echo "opening..."
            start iexplore.exe https://portal.nctu.edu.tw/portal/login.php
        )
    )
)


if "%array[1]%"=="-" (
    set /a number_3=!number_1! - !number_2!
    echo !number_3!
    if !number_3!==100 (
        set /p open_website="Start e3?(1.yes 2.no)"
        if "!open_website!"=="yes" (
            echo "opening..."
            start iexplore.exe https://portal.nctu.edu.tw/portal/login.php
        )
    )
)
