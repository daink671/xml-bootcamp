<?xml version="1.0" ?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
    <xsl:template match="/">
        <table id="menuTable" border="1" class="indent"><!--get table-->
            <thead>
                <tr><!--tr : define rows-->
                    <th colspan="3">Dublin cinema movie list</th>
                </tr>
                <tr>
                    <th>Select</th><!--th : define header cells-->
                    <th>Movie</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                <xsl:for-each select="/Movielist/section"><!--bring movielist section by section-->
                    <tr>
                        <td colspan="3">
                            <xsl:value-of select="@name" />
                        </td>
                    </tr>
                    <xsl:for-each select="movie">
                        <tr id="{position()}"><!--this id will be used for deleting-->
                            <xsl:attribute name="popular">
                                <xsl:value-of select="boolean(@popular)" /><!--highlight all popular movies-->
                            </xsl:attribute>
                            <td align="center">
                                <input name="item0" type="checkbox" />
                            </td>
                            <td>
                                <xsl:value-of select="item" />
                            </td>
                            <td align="right">
                                <xsl:value-of select="price" />
                            </td>
                        </tr>
                    </xsl:for-each>
                </xsl:for-each>
            </tbody>
        </table>
    </xsl:template>
</xsl:stylesheet>