let menudata = [
    {
        parent: {
            path: "/hooks/state",
            title: "State Hooks",
            subroute: [
                {
                    path: "/hooks/state/useState",
                    title:"useState Hook"
                },
                {
                    path: "hooks/state/useReducer",
                    title: "useReducer Hook"
                }
            ]
        }
    },
    {
        parent: {
            path: "/hooks/effect",
            title: "Effect Hooks",
            subroute: [
                {
                    path: "/hooks/effect/useEffect",
                    title: "useEffect Hook"
                },
                {
                    path: "/hooks/effect/useEffect/2",
                    title: "useEffect-2 Hook"
                },
                {
                    path: "/hooks/effect/useLayoutEffect",
                    title: "useLayoutEffect Hook"
                }
            ]
        }
    },
    {
        
        parent: {
            path: "/hooks/ref",
            title: "Ref Hooks",
            subroute: [
                {
                    path: "/hooks/ref/useRef",
                    title: "useRef Hook"
                }
            ]
        }

    },
    {
         
        parent: {
            path: "/hooks/perform",
            title: "Performance Hooks",
            subroute: [
                {
                    path: "/hooks/perform/useCallback",
                    title: "useCallback Hook"
                },
                {
                    path: "/hooks/perform/useMemo",
                    title: "useMemo Hook"
                }
            ]
        }
    },
    {
        parent: {
            path: "/hooks/context",
            title: "context Hooks",
            subroute: [
                {
                    path: "/hooks/context/useContext",
                    title: "useContext Hook"
                }
            ]
        }
    },

]

export default menudata