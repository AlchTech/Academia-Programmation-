# GIT

---

Quand nous créons un projet de développement on initialise un projet Git.

Git permmet d'intéragir avec un gestinnaire de version comme Github ou Gitlab. Il nous sert à évitez les pertes, mais également travailliez à plusieurs sur un projet, il existera une version local du projet (votre ordinateur) et une version distante sur un serveur( Github ou GitLab)

---

## Commande de configuration

Pour configurer git suite à sont installation

Identity :

```code
git config --global user.name "votre_nom_git"
git config --global user.email email@exemple.com
```

Merge :

```code
git config --global core.editor "C:\paths\visua\VSC.exe -w"                     // Votre editeur de code
git config --global merge.tool "C:\paths\visua\VSC.exe -w"                      // Votre editeur de merge
```

---

## Commande de projet

Lors de la création d'un projet on fait _initialisation Git_

```code
git init                                                                        // Initialisation avec une branche main
```
