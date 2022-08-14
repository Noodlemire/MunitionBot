args = {...}
sum = 0

function findField(lines, l, f)
	local line = lines[l]
	--print(line)
	--print('("'..f..'"),')
	
	if line:find('%("'..f..'",') then
		local field = ""
		local onquote = false
		
		for i = #line, 1, -1 do
			local c = line:sub(i, i)
			--print(c)
			
			if not onquote and c == '"' then
				onquote = true
			elseif onquote then
				if c == '"' and line:sub(i-1, i-1) ~= "\\" then
					--print("Return: "..field)
					return field, line
				else
					--print("Adding "..c)
					field = c..field
				end
			end
		end
	end
	
	if not line:find("}%)") then
		return findField(lines, l+1, f)
	end
end

function findMeta(line, f)
	--print(line)
	--print('("'..f..'"),')

	local _, start = line:find(f..':')
	
	if start then
		local meta = ""
		local onquote = false
		
		for i = start, #line do
			local c = line:sub(i, i)
			--print(c)
			
			if not onquote and c == '"' then
				onquote = true
			elseif onquote then
				if c == '"' and line:sub(i-1, i-1) ~= "\\" then
					--print("Return: "..meta)
					return meta:gsub("%-", "%%-")
				else
					--print("Adding "..c)
					meta = meta..c
				end
			end
		end
	end
end

for _, filename in ipairs(args) do
	local lines = {}
	for line in io.lines(filename) do
		lines[#lines+1] = line
	end

	for a, header in ipairs(lines) do
		if header:find(", %(e%)") then
			local cat = ""
			local bracket = 0
			local bquote = 0
			local hq1, hq2 = nil, nil
			
			for b = 1, #header do
				local c = header:sub(b, b)
				
				if c == "[" then
					bracket = 1
				elseif c == "]" then
					bracket = 2
				elseif bracket == 0 and bquote < 2 and c == '"' then
					bquote = bquote + 1
				elseif (bracket + bquote) >= 2 then
					if not hq1 and c == '"' then
						hq1 = b
					elseif hq1 and not hq2 then
						if c == '"' then
							hq2 = b
						else
							cat = cat..c
						end
					end
				end
			end

			if cat == "" then
				print(header.."\nNo category!\n")
			elseif cat ~= "Any" and cat ~= "Other" then
				local alignment, aline = findField(lines, a+1, "Alignment")
				local goal, goaline = findField(lines, a+1, "Objective:")
				local subCat = findMeta(header, "subCat")
				local va = (not alignment or not alignment:gsub(' ', ''):find(cat))
				local vg = (cat ~= "Neutral" and (not goal or not goal:gsub(' ', ''):find(cat)))
				local vs = (not subCat or not alignment or not alignment:find(subCat))

				if alignment and alignment:find("Neutral") then
					vs = (subCat ~= findField(lines, a+1, "Type"))
				end

				if goaline and goaline:find("factions."..cat..".goal") then
					vg = false
				end

				if va or vg or vs then
					print(header)
				end

				if va or vs then
					print("Mismatched Alignment or subCat: "..(alignment or "nil"))
				end

				if vg then
					print("Mismatched Goal: "..(goal or "nil"))
				end

				if va or vg or vs then
					print()
					sum = sum + 1
				end
			end
		end
	end
end

print("Verification complete. Errors: "..sum)
