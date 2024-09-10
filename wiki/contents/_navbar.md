<style>
    #theme {
        color: var(--base-color)
    }
    #theme:hover {
        cursor: pointer;
    }
    #theme {
        margin-left: 10px;
    }
</style>

- <a style="color:var(--heading-color)" href="../">HOME</a>
- <a style="color:var(--heading-color)" href="#/regulamin"></i>REGULAMIN</a> <!-- By using '#' in the URL we make sure page is not reladed. --> 
- <a style="color:var(--heading-color)" href="#/nowosci">NOWOŚCI</a>
- <i id="theme" class="bi bi-toggle-off" style="color:var(--heading-color)" onclick="toggleTheme(false)"></i>

<!-- Looks like scripts cannot be executed from within '_navbar.md' so here's a hacky solution to that. -->
<img onerror="updateThemeIcon()" src /></img>
