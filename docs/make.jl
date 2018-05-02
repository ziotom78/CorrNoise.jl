push!(LOAD_PATH, joinpath("..", "src"))

using Documenter, CorrNoise

makedocs(modules = [CorrNoise],
    format = :html,
    sitename = "CorrNoise.jl",
    pages = Any[
        "Manual" => "index.md",
    ])

deploydocs(repo = "github.com/ziotom78/CorrNoise.jl.git",
    target = "build",
    julia = "0.6",
    deps = nothing,
    make = nothing)
